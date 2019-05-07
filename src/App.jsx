import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionBar from './ActionBar'

class App extends Component {
  render() {
    return (
      <div>
        <ActionBar />
        <h3>{this.props.panelState.toString()}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    panelState: state,
  }
}

export default connect(mapStateToProps)(App)
