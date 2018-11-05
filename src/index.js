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
  todos: [
    {
      'todo_id': 1,
      'todo_duration_amount': 40,
      'title': 'Todo 1',
      'todo_date': 11 - 25 - 2018,
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 2,
      'title': 'Todo 2',
      'todo_duration_amount': 30,
      'todo_date': 11 - 26 - 2018,
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 3,
      'title': 'Todo 3',
      'todo_duration_amount': 20,
      'todo_date': 11 - 27 - 2018,
      'todo_start_time': null,
      'complete': false
    }
  ]
},
allStoreEnhancers
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
serviceWorker.unregister()
