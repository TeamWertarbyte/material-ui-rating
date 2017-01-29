import React, { Component, PropTypes } from 'react'
import { IconButton } from 'material-ui'

export default class RatingItem extends Component {
  render() {
    return (
      <IconButton
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onTouchTap={this.props.onTouchTap}
      >
        {this.props.icon}
      </IconButton>
    )
  }
}

RatingItem.propTypes = {
  icon: PropTypes.node.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onTouchTap: PropTypes.func.isRequired
}
