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
          hovered={i <= this.state.hoverValue}
          filled={i <= this.props.value}
          onMouseEnter={() => this.setState({ hoverValue: i })}
          onMouseLeave={() => this.setState({ hoverValue: this.props.value })}
          onTouchTap={() => this.props.onChange(i)}
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
  max: 5,
  value: 0
}

Rating.propTypes = {
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.number
}
