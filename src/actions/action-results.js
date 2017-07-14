import { UPDATE_RESULTS } from './types.js'
import axios from 'axios'

export function updateResults(text){
  const URL = '/api/tone';
  let request = axios.post(URL, {text:text});
  return {
    type: UPDATE_RESULTS,
    payload: request
  }
}