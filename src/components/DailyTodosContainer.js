import React, { Component } from 'react'
import moment from 'moment'

import DailyTodos from './DailyTodos'
import WeeklyDateRange from './WeeklyDateRange'

class DailyTodosContainer extends Component {
  render () {
    let { todos, durations, onGetLastWeekTodos, onGetNextWeekTodos, currentWeek } = this.props
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
      <div className='container'>
        <WeeklyDateRange onGetLastWeekTodos={onGetLastWeekTodos} onGetNextWeekTodos={onGetNextWeekTodos} currentWeek={currentWeek} />
        <div>
        {weekDays.map((weekDay) => {
           const weekDayTodos = todos.filter((todo) =>          
            moment(todo.date).format('dddd') === weekDay
            <DailyTodos className='dailyTodo' weekDayTodos={weekDayTodos} todos={todos} durations={durations} />
          )}
        )}
        </div>
      </div>
    )
  }
}
export default DailyTodosContainer
