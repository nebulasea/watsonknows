import { UPDATE_TEXT } from './types.js'

export function updateText(text){
  return {
    type: UPDATE_TEXT,
    payload: text
  }
}