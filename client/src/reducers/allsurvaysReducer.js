import { SURVAYS_ALL } from '../components/actions/types'
export default (state = [], action) => {
  switch (action.type) {
    case SURVAYS_ALL:
      return action.payload

    default:
      return state
  }
}
