import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { colors } from '@material-ui/core'
import { Star as ToggleStar, StarBorder as ToggleStarBorder} from '@material-ui/icons'

const styles = {
  disabled: {
    pointerEvents: 'none'
  }
}

export default class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverValue: props.value
    }
  }

  renderIcon (i) {
    const filled = i <= this.props.value
    const hovered = i <= this.state.hoverValue

    if ((hovered && !filled) || (!hovered && filled)) {
      return this.props.iconHoveredRenderer ? this.props.iconHoveredRenderer({
        ...this.props,
        index: i
      }) : this.props.iconHovered
    } else if (filled) {
      return this.props.iconFilledRenderer ? this.props.iconFilledRenderer({
        ...this.props,
        index: i
      }) : this.props.iconFilled
    } else {
      return this.props.iconNormalRenderer ? this.props.iconNormalRenderer({
        ...this.props,
        index: i
      }) : this.props.iconNormal
    }
  }

  render () {
    const {
      disabled,
      iconFilled,
      iconHovered,
      iconNormal,
      tooltip,
      tooltipRenderer,
      tooltipPosition,
      tooltipStyles,
      iconFilledRenderer,
      iconHoveredRenderer,
      iconNormalRenderer,
      itemStyle,
      itemClassName,
      itemIconStyle,
      max,
      onChange,
      readOnly,
      style,
      value,
      ...other
    } = this.props

    const rating = []

    for (let i = 1; i <= max; i++) {
      rating.push(
        <IconButton
          key={i}
          className={itemClassName}
          disabled={disabled}
          iconStyle={itemIconStyle}
          style={itemStyle}
          tooltip={tooltip || tooltipRenderer ? tooltipRenderer({index: i, ...this.props}) : null}
          tooltipPosition={tooltipPosition}
          tooltipStyles={tooltipStyles}
          onMouseEnter={() => this.setState({hoverValue: i})}
          onMouseLeave={() => this.setState({hoverValue: value})}
          onClick={() => {
            if (!readOnly && onChange) {
              onChange(i)
            }
          }}
        >
          {this.renderIcon(i)}
        </IconButton>
      )
    }

    return (
      <div
        style={this.props.disabled || this.props.readOnly ? {...styles.disabled, ...this.props.style} : this.props.style}
        {...other}
      >
        {rating}
      </div>
    )
  }
}

Rating.defaultProps = {
  disabled: false,
  iconFilled: <ToggleStar style={{color : colors.orange[500]}} />,
  iconHovered: <ToggleStarBorder  style={{color : colors.orange[500]}} />,
  iconNormal: <ToggleStarBorder style={{color : colors.green[300]}} />,
  tooltipPosition: 'bottom-center',
  max: 5,
  readOnly: false,
  value: 0
}

Rating.propTypes = {
  disabled: PropTypes.bool,
  iconFilled: PropTypes.node,
  iconHovered: PropTypes.node,
  iconNormal: PropTypes.node,
  tooltip: PropTypes.node,
  tooltipRenderer: PropTypes.func,
  tooltipPosition: PropTypes.string,
  tooltipStyles: PropTypes.object,
  iconFilledRenderer: PropTypes.func,
  iconHoveredRenderer: PropTypes.func,
  iconNormalRenderer: PropTypes.func,
  itemStyle: PropTypes.object,
  itemClassName: PropTypes.object,
  itemIconStyle: PropTypes.object,
  max: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.number
}
