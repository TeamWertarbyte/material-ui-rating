import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

const noPointerEvents = {
  pointerEvents: 'none'
}

const styles = {
  root: {},
  iconButton: {},
  icon: {},
  disabled: noPointerEvents,
  readOnly: noPointerEvents
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

    const normalColor = this.props.disabled ? {} : {nativeColor: grey[300]}
    const orangeColor = this.props.disabled ? {} : {nativeColor: orange[500]}

    const iconHovered = !this.props.iconHovered
      ? <StarBorder
        classes={{ root: this.props.classes.icon }}
        {...orangeColor} />
      : this.props.iconHovered

    const iconFilled = !this.props.iconFilled
      ? <Star
        classes={{root: this.props.classes.icon}}
        {...orangeColor} />
      : this.props.iconFilled

    const iconNormal = !this.props.iconNormal
      ? <StarBorder
        className={this.props.classes.icon}
        {...normalColor} />
      : this.props.iconNormal

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
    const { classes, max, disabled, readOnly, value, onChange } = this.props
    const rating = []

    for (let i = 1; i <= max; i++) {
      rating.push(
        <IconButton
          key={i}
          className={classNames(
            classes.iconButton,
            {
              [classes.disabled]: disabled,
              [classes.readOnly]: readOnly
            }
          )}
          disabled={disabled}
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

    return (<div className={classes.root}>{rating}</div>)
  }
}

Rating.defaultProps = {
  disabled: false,
  max: 5,
  readOnly: false,
  value: 0
}

Rating.propTypes = {
  /** Useful to extend the style applied to components. See the repository README for the accepted keys. */
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

export default withStyles(styles)(Rating)
