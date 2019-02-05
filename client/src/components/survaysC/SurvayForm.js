import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router-dom'
import SurvayField from './SurvayField'
import EmailValidator from './emailHelper'

const Fields = [
  { label: 'Form title', name: 'title' },
  { label: 'Form subject', name: 'subject' },
  { label: 'Form body', name: 'body' },
  { label: 'Form receptients', name: 'receptients' }
]

class SurvayForm extends Component {
  state = {}

  renderForm () {
    return Fields.map(({ label, name }) => (
      <Field
        key={name}
        type='text'
        label={label}
        name={name}
        component={SurvayField}
      />
    ))
  }
  render () {
    const { handleSubmit, changeMe } = this.props

    return (
      <div>
        <h1>Survay Creation</h1>
        <form onSubmit={handleSubmit(changeMe)}>
          {this.renderForm()}
          <button
            className='btn waves-effect waves-light right z-depth-5'
            type='submit'
            name='action'
            style={{ marginBottom: '20px' }}
          >
            Next
            <i className='material-icons right'>arrow_forward</i>
          </button>
          <button
            className='btn waves-effect waves-light left z-depth-3'
            name='action'
            onClick={() => this.props.history.push('/survays')}
            style={{ marginBottom: '20px' }}
          >
            Cancel
            <i className='material-icons right'>clear</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors = {}

  if (EmailValidator(values.receptients || ' ')) {
    errors.receptients = EmailValidator(values.receptients)
  }
  // this is bcz the below errers override the above so we use this above
  Fields.map(({ name }) => {
    if (!values[name]) {
      errors[name] = `${name} is Required`
    }
  })

  return errors
}

export default reduxForm({
  form: 'myform',
  validate,
  destroyOnUnmount: false
})(withRouter(SurvayForm))
