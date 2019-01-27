import axios from 'axios'
import { AUTH_USER } from './types'

export const authUser = () => async dispatch => {
  const res = await axios.get('/api/newUser')

  dispatch({
    type: AUTH_USER,
    payload: res.data
  })
}

export const addCredits = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)
  dispatch({
    type: AUTH_USER,
    payload: res.data
  })
}
