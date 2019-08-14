import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Rating from '../src'

storiesOf('Rating', module)
  .add('with some stars', () => (
    <Rating
      value={3}
      max={5}
      onChange={action('onChange')}
    />
  ))
  .add('with half stars', () => (
    <Rating
      value={3.5}
      max={5}
      onChange={action('onChange')}
    />
  ))
  .add('read only', () => (
    <Rating
      value={3}
      max={5}
      readOnly
    />
  ))
  .add('hover disabled', () => (
    <Rating
      value={3}
      max={5}
      hoverDisabled
    />
  ))
  .add('disabled', () => (
    <Rating
      value={3}
      max={5}
      disabled
    />
  ))
  .add('with custom icons', () => {
    const { AddCircle, AddCircleOutline, Remove } = require('@material-ui/icons')
    const green = require('@material-ui/core/colors/green').default
    const red = require('@material-ui/core/colors/red').default

    return (
      <div>
        <Rating
          value={3}
          max={5}
          onChange={(i) => console.log('onChange ' + i)}
          iconFilled={<AddCircle htmlColor={green[500]} />}
          iconHovered={<AddCircleOutline htmlColor={green[500]} />}
          iconNormal={<Remove htmlColor={red[300]} />}
        />
        <Rating
          value={3}
          max={5}
          onChange={(i) => console.log('onChange ' + i)}
          iconFilled={<AddCircle htmlColor={green[500]} />}
          iconHovered={<AddCircleOutline htmlColor={green[500]} />}
          iconNormal={<Remove htmlColor={red[300]} />}
          disabled
        />
      </div>
    )
  })
  .add('with custom component', () => <Rating Component='span' onChange={action('onChange')} />)
  .add('right to left', () => {
    return (
      <MuiThemeProvider theme={getRtlTheme()}>
        <Rating
          value={3.5}
          max={5}
          onChange={action('onChange')}
        />
      </MuiThemeProvider>)
  })

function getRtlTheme () {
  return createMuiTheme({ direction: 'rtl' })
}
