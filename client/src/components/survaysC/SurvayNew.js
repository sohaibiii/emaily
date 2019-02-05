import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurvayForm from './SurvayForm'
import SurvayReview from './SurvayReview'

class SurvayNew extends Component {
  state = {
    show: false
  }
  showComp () {
    if (!this.state.show) {
      return (
        <SurvayForm
          changeMe={() => {
            this.setState({ show: true })
          }}
        />
      )
    } else {
      return (
        <SurvayReview
          changeMe={() => {
            this.setState({ show: false })
          }}
        />
      )
    }
  }
  render () {
    return <div>{this.showComp()}</div>
  }
}

export default reduxForm({
  form: 'myform',
  destroyOnUnmont: true
})(SurvayNew)
