import { combineReducers } from 'redux'
import textReducer from './reducer-text'
import resultsReducer from './reducer-results'

export default combineReducers({
  text: textReducer,
  results: resultsReducer
})

