import React, { Component, PropTypes } from 'react'
import { IconButton } from 'material-ui'
import { colors } from 'material-ui/styles'
import { ToggleStar, ToggleStarBorder } from 'material-ui/svg-icons'

const styles = {
  root: {}
}

export default class RatingItem extends Component {
  renderIcon() {
    if ((this.props.hovered && !this.props.filled) || (!this.props.hovered && this.props.filled)) {
      return (
        <ToggleStarBorder
          color={colors.orange500}
        />
      )
    } else if (this.props.filled) {
      return (
        <ToggleStar
          color={colors.orange500}
        />
      )
    } else {
      return (
        <ToggleStarBorder
          color={colors.grey300}
        />
      )
    }
  }

  render() {
    return (
      <IconButton
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onTouchTap={this.props.onTouchTap}
      >
        {this.renderIcon()}
      </IconButton>
    )
  }
}

RatingItem.propTypes = {
  hovered: PropTypes.bool.isRequired,
  filled: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onTouchTap: PropTypes.func.isRequired
}
