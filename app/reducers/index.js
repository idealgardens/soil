import { combineReducers } from 'redux'
import cars from './cars'
import sheets from './sheets'
import users from './users'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  cars,
  sheets,
  users,
  router: routeReducer
})

export default rootReducer
