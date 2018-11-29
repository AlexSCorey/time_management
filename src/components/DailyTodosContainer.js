import React, { Component } from 'react'

import DailyTodos from './DailyTodos'
import WeeklyDateRange from './WeeklyDateRange'

class DailyTodosContainer extends Component {
  render () {
    let { todos, durations, onGetLastWeekTodos, onGetNextWeekTodos, currentWeek } = this.props
    return (
      <div className='container'>
        <WeeklyDateRange onGetLastWeekTodos={onGetLastWeekTodos} onGetNextWeekTodos={onGetNextWeekTodos} currentWeek={currentWeek} />
        <DailyTodos className='dailyTodo' todos={todos} durations={durations} />
      </div>
    )
  }
}
export default DailyTodosContainer
