import React, { Component } from 'react'
import moment from 'moment'

import WeeklyDateRange from '../WeeklyDateRange'
import DailyTodoTable from './DailyTodoTable'

class DailyTodosContainer extends Component {
  render () {
    let { todos, timeOfDay, onGetLastWeekTodos, onGetNextWeekTodos, currentWeek, weekDays } = this.props
    return (
      <div>
        <WeeklyDateRange onGetLastWeekTodos={onGetLastWeekTodos} onGetNextWeekTodos={onGetNextWeekTodos} currentWeek={currentWeek} />
        <div className='weeklyTodoContainer'>
          {weekDays.map((weekDay) => {
            return (
              <div className='weeklyTodos'>
                <h1 className='weekDayTitle'>{weekDay}</h1>
                <DailyTodoTable key={`${weekDay}`}className='dailyTodo' todos={todos} timeOfDay={timeOfDay} weekDay={weekDay} />
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
}
export default DailyTodosContainer
