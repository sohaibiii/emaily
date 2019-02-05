import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { survayStart } from '../actions/index'

class SurvayReview extends Component {
  state = {}
  render () {
    const { changeMe, form, history } = this.props
    console.log(form)

    return (
      <div>
        <h2>Survay Sending Confirmation</h2>
        <h3>Title</h3>
        <p>{form.title}</p>
        <h3>Subjett</h3>
        <p>{form.subject}</p>
        <h3>Body</h3>
        <p>{form.body}</p>
        <h3>Receptients</h3>
        <p>{form.receptients}</p>
        <button
          className='btn-small waves-effect waves-light green accent-4'
          style={{ marginBottom: '20px' }}
          onClick={() => {
            changeMe()
          }}
        >
          Return
          <i className='material-icons right'>keyboard_return</i>
        </button>
        <button
          className='btn-small waves-effect waves-light light-blue accent-4 right'
          style={{ marginBottom: '20px' }}
          onClick={() => {
            this.props.dispatch(survayStart(form, history))
          }}
        >
          send
          <i className='material-icons right'>send</i>
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    form: state.form.myform.values
  }
}

export default connect(mapStateToProps)(withRouter(SurvayReview))
