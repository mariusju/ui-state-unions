import React from 'react'
import { connect } from 'react-redux'
import actionTypes from './actionTypes'

const ActionBar = ({ dispatch }) => {
  const actions = Object.keys(actionTypes).map(key => actionTypes[key])
  return (
    <div>
      dispatch action:
      {actions.map((action, i) => (
        <button onClick={() => dispatch({ type: action })} key={i}>
          {action}
        </button>
      ))}
    </div>
  )
}

export default connect()(ActionBar)
