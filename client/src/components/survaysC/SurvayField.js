import React from 'react'

const SurvayField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input id='email' type='text' className='validate' {...input} />
        <label htmlFor='email'>{label}</label>
        <span className='red-text' data-error='wrong' data-success='right'>
          {touched && error ? error : ''}
        </span>
      </div>
    </div>
  )
}

export default SurvayField
