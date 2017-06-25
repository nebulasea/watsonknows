import { UPDATE_TEXT } from '../actions/types.js'

export default function reducer(state={value:''}, action){
  switch (action.type) {
    case UPDATE_TEXT:
      return { value:action.payload }
      break;
  
    default: 
    return state
      break;
  }
}