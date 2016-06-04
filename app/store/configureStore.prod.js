import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
// import { syncHistory } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware'

export default function configureStore (initialState, history) {
  // const reduxRouterMiddleware = syncHistory(history)
  const createStoreWithMiddleware = compose(
    // applyMiddleware(thunk, reduxRouterMiddleware)
    applyMiddleware(thunk, apiMiddleware)
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
