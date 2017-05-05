import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'material-ui'
import { colors } from 'material-ui/styles'
import { ToggleStar, ToggleStarBorder } from 'material-ui/svg-icons'

const styles = {
  disabled: {
    pointerEvents: 'none'
  }
}

export default class Rating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverValue: props.value
    }
  }

 
  renderIcon(i) {
    const filled = i <= this.props.value
    const hovered = i <= this.state.hoverValue

    if ((hovered && !filled) || (!hovered && filled)) {
      return this.props.iconHoveredRenderer ? this.props.iconHoveredRenderer({...this.props, index : i}) : this.props.iconHovered
    } else if (filled) {
      return this.props.iconFilledRenderer ? this.props.iconFilledRenderer({...this.props, index : i}) : this.props.iconFilled
    } else {
      return this.props.iconNormalRenderer ? this.props.iconNormalRenderer({...this.props, index : i}) : this.props.iconNormal
    }
  }


  render() {

    const rating = []
    
    for (let i = 1; i <= this.props.max; i++) {

      const tooltip = this.props.tooltip || this.props.tooltipRenderer ? this.props.tooltipRenderer({index : i, ...this.props}) : null;

      rating.push(
        <IconButton
          key={i}
          className={this.props.className}
          disabled={this.props.disabled}
          iconStyle={this.props.itemIconStyle}
          iconClassName={this.props.iconClassName}
          style={this.props.itemStyle}
          tooltip={tooltip}
          tooltipPosition={this.props.tooltipPosition}
          tooltipStyles={this.props.tooltipStyles}
          onMouseEnter={() => this.setState({ hoverValue: i })}
          onMouseLeave={() => this.setState({ hoverValue: this.props.value })}
          onTouchTap={() => {
            if (!this.props.readOnly && this.props.onChange) {
              this.props.onChange(i)
            }
          }}
        >
          {this.renderIcon(i)}
        </IconButton>
      )
    }

    return (
      <div
        style={this.props.disabled || this.props.readOnly ? { ...styles.disabled, ...this.props.style } : this.props.style}
      >
        {rating}
      </div>
    )
  }
}

Rating.defaultProps = {
  disabled: false,
  iconFilled: <ToggleStar color={colors.orange500}/>,
  iconHovered: <ToggleStarBorder color={colors.orange500}/>,
  iconNormal: <ToggleStarBorder color={colors.grey300}/>,
  tooltipPosition: 'bottom-center',
  max: 5,
  readOnly: false,
  value: 0
}

Rating.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconFilled: PropTypes.node,
  iconHovered: PropTypes.node,
  iconNormal: PropTypes.node,
  iconClassName : PropTypes.string,
  tooltip: PropTypes.node,
  tooltipRenderer: PropTypes.func,
  tooltipPosition: PropTypes.string,
  tooltipStyles : PropTypes.object,
  iconFilledRenderer: PropTypes.func,
  iconHoveredRenderer: PropTypes.func,
  iconNormalRenderer: PropTypes.func,
  itemStyle: PropTypes.object,
  itemIconStyle: PropTypes.object,
  max: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.number
}
