import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authUser } from './actions/index'

import Header from './Header'
import Landing from './landing'
import SurvayNew from './survaysC/SurvayNew'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(authUser())
  }
  render () {
    return (
      <div className='container'>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/survays' component={Dashboard} />
            <Route
              exact
              path='/survaynew'
              render={props => <SurvayNew {...props} />}
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect()(App)
