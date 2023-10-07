import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import thunk from 'redux-thunk'
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

let _applyMiddleware

_applyMiddleware = applyMiddleware(logger, sagaMiddleware,thunk)

const store = createStore(rootReducer, composeWithDevTools(_applyMiddleware))

sagaMiddleware.run(rootSaga)

export default store
