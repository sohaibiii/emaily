import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
