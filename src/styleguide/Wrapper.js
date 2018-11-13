import React, { Component } from 'react'
import lightBaseTheme from '@material-ui/core/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import getMuiTheme from '@material-ui/core/styles/getMuiTheme'

export default class Wrapper extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={{fontFamily: 'Roboto, sans-serif'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
