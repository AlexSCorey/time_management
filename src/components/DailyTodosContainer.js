import React, { Component } from 'react'
import moment from 'moment'
import { Chart } from 'react-google-charts'

import DailyTodos from './DailyTodos'
import WeeklyDateRange from './WeeklyDateRange'

class DailyTodosContainer extends Component {
  render () {
    let { todos, durations, onGetLastWeekTodos, onGetNextWeekTodos, currentWeek } = this.props
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
      <div>
        <WeeklyDateRange onGetLastWeekTodos={onGetLastWeekTodos} onGetNextWeekTodos={onGetNextWeekTodos} currentWeek={currentWeek} />
        <div className='weeklyTodoContainer'>
          {weekDays.map((weekDay) => {
            return (
              <div>
                <h1 className='weekDayTitle'>{weekDay}</h1>
                <DailyTodos className='dailyTodo' todos={todos} durations={durations} weekDay={weekDay} />
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
