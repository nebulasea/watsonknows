import {UPDATE_RESULTS} from '../actions/types.js'
const initialState = {
  currentMood: [
    {
      name: 'Disgust',
      score: 20,
      fill: '#FF9100'
    }, {
      name: 'Anger',
      score: 40,
      fill: '#D81B60'
    }, {
      name: 'Joy',
      score: 60,
      fill: '#FFF176'
    }, {
      name: 'Fear',
      score: 80,
      fill: '#AEEA00'
    }, {
      name: 'Sadness',
      score: 100,
      fill: '#7C4DFF'
    }
  ],
  totalMood: [
    {
      name: 'Disgust',
      score: 100,
      fill: '#FF9100'
    }, {
      name: 'Anger',
      score: 80,
      fill: '#D81B60'
    }, {
      name: 'Joy',
      score: 60,
      fill: '#FFF176'
    }, {
      name: 'Fear',
      score: 40,
      fill: '#AEEA00'
    }, {
      name: 'Sadness',
      score: 20,
      fill: '#7C4DFF'
    }
  ]
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RESULTS:
      console.log(action.payload.data);
      return action.payload.data
      break;

    default:
      return state
      break;
  }
}