import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './authReducer'
import allSurvays from './allsurvaysReducer'

export default combineReducers({
  survays: allSurvays,
  auth: authReducer,
  form
})
