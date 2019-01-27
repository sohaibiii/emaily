import React, { Component } from 'react'
import { connect } from 'react-redux'
import Payments from './Stripe'

class Header extends Component {
  state = {}

  myheader = () => {
    switch (this.props.auth) {
      case null:
        return <li>still deciding</li>
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Email</a>
          </li>
        )
      default:
        return [
          <li>
            <Payments />
          </li>,
          <li style={{ margin: '0 10px' }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        ]
    }
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href={this.props.auth ? '/survays' : '/'} className='brand-logo'>
            Emaily
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.myheader()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)
