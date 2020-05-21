import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { getHistory } from 'utils'

const history = getHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
})

export type AppState = ReturnType<typeof rootReducer>

const middlewares = [routerMiddleware(history), thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export default createStore(rootReducer, composedEnhancers)
