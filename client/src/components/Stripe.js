import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCredits } from '../components/actions/index'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
  state = {}
  render () {
    return (
      <StripeCheckout
        name='Emaily'
        description='Five dollars for 5 credits'
        token={token => {
          this.props.dispatch(addCredits(token))
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={500}
      >
        <button className='btn btn-primary'>Add Credits</button>
      </StripeCheckout>
    )
  }
}

export default connect()(Payments)
