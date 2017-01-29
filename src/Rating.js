import React, { Component, PropTypes } from 'react'
import RatingItem from './RatingItem'
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
      return this.props.iconHovered
    } else if (filled) {
      return this.props.iconFilled
    } else {
      return this.props.iconNormal
    }
  }

  render() {
    const rating = []
    for (let i = 1; i <= this.props.max; i++) {
      rating.push(
        <RatingItem
          key={i}
          icon={this.renderIcon(i)}
          onMouseEnter={() => this.setState({ hoverValue: i })}
          onMouseLeave={() => this.setState({ hoverValue: this.props.value })}
          onTouchTap={() => this.props.onChange(i)}
        />
      )
    }

    return (
      <div
        style={this.props.disabled ? { ...styles.disabled, ...this.props.style } : this.props.style}
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
  max: 5,
  value: 0
}

Rating.propTypes = {
  disabled: PropTypes.bool,
  iconFilled: PropTypes.node,
  iconHovered: PropTypes.node,
  iconNormal: PropTypes.node,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.number
}
