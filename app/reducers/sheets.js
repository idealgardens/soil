import {
  ADD_SHEET,
  UPDATE_SHEET,
  REMOVE_SHEET,
  GET_SHEETS_REQUEST,
  GET_SHEETS_SUCCESS,
  GET_SHEETS_FAILURE
} from '../actions/sheets'
import {union, clone, toArray } from 'lodash'
export default function sheets(state = [], action) {
  console.log('action triggered:', action)
  switch (action.type) {
    case GET_SHEETS_SUCCESS:
      if(!action.payload.results.timesheets){
        console.error('No timesheets found')
        return state
      }
      console.log('sheets:', action.payload.results.timesheets)
      const sheetsArray = toArray(action.payload.results.timesheets)
      return [...state, ...sheetsArray]
      break
  case ADD_SHEET:
    if(!action.payload){
      console.error('Payload required to add a sheets')
      return state
    }
    return [...state, action.payload]
    break
  default:
    return state
  }
}
