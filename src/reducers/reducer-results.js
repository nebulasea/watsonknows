import { UPDATE_RESULTS } from '../actions/types.js'

export default function reducer(state='', action){
  switch (action.type) {
    case UPDATE_RESULTS:
    console.log(action.payload.data)
      return action.payload.data
      break;
  
    default:
    return state
      break;
  }
}