import React from 'react'
import App from './App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createMiddleware } from 'redux-serial-effects'
import subscribers from './subscribers'

const { middleware, subscribe } = createMiddleware()

subscribers.forEach(subscriber => subscribe(subscriber))

const store = createStore(reducer, applyMiddleware(middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
