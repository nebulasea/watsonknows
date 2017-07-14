import { UPDATE_RESULTS } from '../actions/types.js'
const initialState = [
  {name: 'Disgust', score: 12, fill: '#a4de6c'},
  {name: 'Anger', score: 23, fill: '#82ca9d'},
  {name: 'Joy', score: 67, fill: '#8884d8'},
  {name: 'Fear', score: 100, fill: '#83a6ed'},
  {name: 'Sadness', score: 45, fill: '#8dd1e1'},
]
export default function reducer(state=initialState, action){
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