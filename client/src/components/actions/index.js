import axios from 'axios'
import { AUTH_USER, SURVAYS_ALL } from './types'

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

export const survayStart = (object, history) => {
  return async dispatch => {
    
    const res = await axios.post('/api/survays/new', object)
    dispatch({
      type: AUTH_USER,
      payload: res.data
    })
    history.push('/survays')
  }
}

export const allSurvays = () => {
  return async dispatch => {
    const res = await axios.get('/api/allsurvays')

    dispatch({
      type: SURVAYS_ALL,
      payload: res.data
    })
  }
}
