import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todo-reducer'
import durationReducer from './reducers/duration-reducer'
import profileReducer from './reducers/profile-reducer'
import currentWeekReducer from './reducers/update-week'

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)
const allReducers = combineReducers({
  todos: todoReducer,
  durations: durationReducer,
  profile: profileReducer,
  currentWeek: currentWeekReducer
})
const store = createStore(allReducers, {
  todos: [
    {
      'todo_id': 1,
      'duration': 60,
      'percent': 2.5,
      'title': 'Todo 1',
      'date': moment('11-25-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 2,
      'title': 'Todo 2',
      'duration': 95,
      'percent': 40,
      'date': moment('11-25-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 3,
      'title': 'Todo 3',
      'duration': 10,
      'percent': 1.4,
      'date': moment('11-25-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 4,
      'title': 'Todo 4',
      'duration': 95,
      'percent': 40,
      'date': moment('11-25-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 5,
      'title': 'Todo 5',
      'duration': 95,
      'percent': 40,
      'date': moment('11-26-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 6,
      'title': 'Todo 6',
      'duration': 95,
      'percent': 40,
      'date': moment('11-26-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 7,
      'title': 'Todo 7',
      'duration': 95,
      'percent': 40,
      'date': moment('11-26-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 8,
      'title': 'Todo 8',
      'duration': 95,
      'percent': 40,
      'date': moment('11-26-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 9,
      'title': 'Todo 9',
      'duration': 95,
      'percent': 40,
      'date': moment('11-26-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 10,
      'title': 'Todo 10',
      'duration': 95,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 11,
      'title': 'Todo 11',
      'duration': 95,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 12,
      'title': 'Todo 12',
      'duration': 95,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 13,
      'title': 'Todo 13',
      'duration': 800,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 14,
      'title': 'Todo 14',
      'duration': 800,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 15,
      'title': 'Todo 14',
      'duration': 800,
      'percent': 40,
      'date': moment('11-27-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 16,
      'title': 'Todo 16',
      'duration': 800,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 17,
      'title': 'Todo 17',
      'duration': 800,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 18,
      'title': 'Todo 18',
      'duration': 800,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 19,
      'title': 'Todo 19',
      'duration': 95,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 20,
      'title': 'Todo 20',
      'duration': 95,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 21,
      'title': 'Todo 21',
      'duration': 95,
      'percent': 40,
      'date': moment('11-28-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 22,
      'title': 'Todo 22',
      'duration': 95,
      'percent': 40,
      'date': moment('11-29-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 23,
      'title': 'Todo 23',
      'duration': 95,
      'percent': 40,
      'date': moment('11-29-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 24,
      'title': 'Todo 24',
      'duration': 95,
      'percent': 40,
      'date': moment('11-29-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 25,
      'title': 'Todo 25',
      'duration': 95,
      'percent': 40,
      'date': moment('11-29-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 26,
      'title': 'Todo 26',
      'duration': 95,
      'percent': 40,
      'date': moment('11-29-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 27,
      'title': 'Todo 27',
      'duration': 95,
      'percent': 40,
      'date': moment('11-30-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 28,
      'title': 'Todo 28',
      'duration': 95,
      'percent': 40,
      'date': moment('11-30-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 29,
      'title': 'Todo 29',
      'duration': 95,
      'percent': 40,
      'date': moment('11-30-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    },
    { 'todo_id': 30,
      'title': 'Todo 30',
      'duration': 95,
      'percent': 40,
      'date': moment('11-30-2018').format('MM-DD-YYYY'),
      'todo_start_time': null,
      'complete': false
    }
  ],
  // durations: [60, 95, 10],
  currentWeek: moment(new Date()).startOf('week').format('MM-DD-YYYY')
},
allStoreEnhancers
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
serviceWorker.unregister()
