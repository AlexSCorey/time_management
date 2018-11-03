import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
// import userReducer from './reducers/user-reducer'
import todoReducer from './reducers/todo-reducer'

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)
const allReducers = combineReducers({
  todos: todoReducer
})
const store = createStore(allReducers, {
  todos: []
},
allStoreEnhancers
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
serviceWorker.unregister()
