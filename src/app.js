import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes.js'
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.render(
  <Provider store={ store }>
  {routes}
  </Provider>,
   document.getElementById('app'))