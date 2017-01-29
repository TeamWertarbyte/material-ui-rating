import React, { Component, PropTypes } from 'react'
import RatingItem from './RatingItem'

const styles = {
  root: {}
}

export default class Rating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverValue: props.value
    }
  }

  render() {
    const rating = []
    for (let i = 1; i <= this.props.max; i++) {
      rating.push(
        <RatingItem
          key={i}
          hovered={i <= this.state.hoverValue}
          filled={i <= this.props.value}
          onMouseEnter={this.props.disabled ? undefined : () => this.setState({ hoverValue: i })}
          onMouseLeave={this.props.disabled ? undefined : () => this.setState({ hoverValue: this.props.value })}
          onTouchTap={this.props.disabled ? undefined : () => this.props.onChange(i)}
        />
      )
    }

    return (
      <div
        style={{
          ...styles.root,
          ...this.props.style
        }}
      >
        {rating}
      </div>
    )
  }
}

Rating.defaultProps = {
  disabled: false,
  max: 5,
  value: 0
}

Rating.propTypes = {
  disabled: PropTypes.bool,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.number
}
