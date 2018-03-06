import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'material-ui'
import orange from 'material-ui/colors/orange'
import grey from 'material-ui/colors/grey'
import { Star, StarBorder } from 'material-ui-icons'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames';

const styles = {
  root: {},
  iconButton: {},
  icon: {},
  disabled: {
    pointerEvents: 'none'
  }
}

/**
 * Material design star rating component for oyur star application!
 * @see [Card UI controls](https://material.io/guidelines/components/cards.html#cards-actions)
 */
class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverValue: props.value
    }
  }

  renderIcon (i) {
    const filled = i <= this.props.value
    const hovered = i <= this.state.hoverValue

    const normalColor = this.props.disabled ? {} : {nativeColor: grey[300]};
    const orangeColor = this.props.disabled ? {} : {nativeColor: orange[500]};

    const iconHovered = !this.props.iconHovered ?
      <StarBorder
        classes={{ root: this.props.classes.icon }}
        {...orangeColor} /> :
      this.props.iconHovered

    const iconFilled = !this.props.iconFilled ?
      <Star
        classes={{root: this.props.classes.icon}}
        {...orangeColor} /> :
      this.props.iconFilled

    const iconNormal = !this.props.iconNormal ?
      <StarBorder
        className={this.props.classes.icon}
        {...normalColor} /> :
      this.props.iconNormal

    if ((hovered && !filled) || (!hovered && filled)) {
      return this.props.iconHoveredRenderer ? this.props.iconHoveredRenderer({
        ...this.props,
        index: i
      }) : iconHovered
    } else if (filled) {
      return this.props.iconFilledRenderer ? this.props.iconFilledRenderer({
        ...this.props,
        index: i
      }) : iconFilled
    } else {
      return this.props.iconNormalRenderer ? this.props.iconNormalRenderer({
        ...this.props,
        index: i
      }) : iconNormal
    }
  }

  render () {
    const rating = []

    for (let i = 1; i <= this.props.max; i++) {
      rating.push(
        <IconButton
          key={i}
          className={classNames(
            this.props.classes.iconButton,
            {
              [this.props.classes.disabled]: this.props.disabled || this.props.readOnly
            }
          )}
          disabled={this.props.disabled}
          onMouseEnter={() => this.setState({hoverValue: i})}
          onMouseLeave={() => this.setState({hoverValue: this.props.value})}
          onClick={() => {
            if (!this.props.readOnly && this.props.onChange) {
              this.props.onChange(i)
            }
          }}
        >
          {this.renderIcon(i)}
        </IconButton>
      )
    }

    return (<div className={this.props.classes.root}>{rating}</div>)
  }
}

Rating.defaultProps = {
  disabled: false,
  tooltipPosition: 'bottom-center',
  max: 5,
  readOnly: false,
  value: 0
}

Rating.propTypes = {
  /** Sets classes for IconButton and SvgIcon components. */
  classes: PropTypes.object.isRequired,
  /** Disables the rating and gray it out if set to true. */
  disabled: PropTypes.bool,
  /** This is the icon to be used as an icon in value range. */
  iconFilled: PropTypes.node,
  /** Overrides filled icon renderer. */
  iconFilledRenderer: PropTypes.func,
  /** Overrides hovered icon renderer. */
  iconHoveredRenderer: PropTypes.func,
  /** This is the icon to be used as an hovered icon. */
  iconHovered: PropTypes.node,
  /** This is the icon to be used as an normal icon. */
  iconNormal: PropTypes.node,
  /** Overrides normal icon renderer. */
  iconNormalRenderer: PropTypes.func,
  /** The max value of the rating bar. */
  max: PropTypes.number,
  /** Fired when a value is clicked. */
  onChange: PropTypes.func,
  /** Don't allow input if set to true. */
  readOnly: PropTypes.bool,
  /** The value of the rating bar. */
  value: PropTypes.number
}

export default withStyles(styles)(Rating);
