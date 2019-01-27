import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authUser } from './actions/index'
import Header from './Header'
import Landing from './landing'

const SurvayNew = () => {
  return <h1>MY servay New</h1>
}
const Dashboard = () => {
  return <h1>Dashboard</h1>
}

class App extends Component {
  componentDidMount () {
    this.props.dispatch(authUser())
  }
  render () {
    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/survays' component={Dashboard} />
            <Route path='/survaynew' component={SurvayNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect()(App)
