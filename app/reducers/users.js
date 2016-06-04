import {
  GET_SHEETS_SUCCESS
} from '../actions/sheets'
import { union, clone, toArray } from 'lodash'
export default function users (state = [], action) {
  switch (action.type) {
  case GET_SHEETS_SUCCESS:
    if(!action.payload.results.timesheets){
      console.error('No timesheets found')
      return state
    }
    const userArray = toArray(action.payload.supplemental_data.users)
    console.warn('user array:', userArray)
    return [...state, ...userArray]
      break
  default:
    return state
  }
}
