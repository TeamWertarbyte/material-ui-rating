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
  iconButton: {
    padding: 8,
    marginLeft: -8,
    '&:first-child': {
      marginLeft: 0
    }
  },
  disabled: noPointerEvents,
  readOnly: noPointerEvents
}

/**
 * Material design star rating component for your star application.
 * @see [Card UI controls](https://material.io/guidelines/components/cards.html#cards-actions)
 */
class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverValue: props.value
    }
  }

  getIcon (type, index) {
    const {
      disabled,
      iconNormal,
      iconNormalRenderer,
      iconHovered,
      iconHoveredRenderer,
      iconFilled,
      iconFilledRenderer
    } = this.props

    switch (type) {
      case 'normal':
        return iconNormalRenderer
          ? iconNormalRenderer({ ...this.props, index })
          : (disabled ? React.cloneElement(iconNormal, { nativeColor: grey[300] }) : iconNormal)
      case 'hovered':
        return iconHoveredRenderer
          ? iconHoveredRenderer({ ...this.props, index })
          : (disabled ? React.cloneElement(iconHovered, { nativeColor: grey[300] }) : iconHovered)
      case 'filled': return iconFilledRenderer
        ? iconFilledRenderer({ ...this.props, index })
        : (disabled ? React.cloneElement(iconFilled, { nativeColor: grey[300] }) : iconFilled)
    }
  }

  renderIcon (i) {
    const { value } = this.props

    const rest = value >= i - 1 && value < i ? value - i + 1 : 0
    const filled = rest > 0 || i <= value
    const hovered = rest > 0 || i <= Math.floor(this.state.hoverValue)

    if (rest > 0) {
      return (
        <React.Fragment>
          {React.cloneElement(Math.floor(this.state.hoverValue) < value ? this.getIcon('normal', i) : this.getIcon('hovered', i), {
            style: { position: 'absolute' }
          })}
          {React.cloneElement(this.state.hoverValue < value ? this.getIcon('hovered', i) : this.getIcon('filled', i), {
            style: {
              clipPath: `polygon(0% 0%, ${rest * 100}% 0%, ${rest * 100}% 100%, 0% 100%)`
            }
          })}
        </React.Fragment>
      )
    }

    if ((hovered && !filled) || (!hovered && filled)) {
      return this.getIcon('hovered', i)
    } else if (filled) {
      return this.getIcon('filled', i)
    } else {
      return this.getIcon('normal', i)
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
          onMouseEnter={() => this.setState({ hoverValue: i })}
          onMouseLeave={() => this.setState({ hoverValue: value })}
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
  value: 0,
  iconHovered: <StarBorder nativeColor={orange[500]} />,
  iconFilled: <Star nativeColor={orange[500]} />,
  iconNormal: <StarBorder nativeColor={grey[300]} />
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
