import React from 'react'

import DailyTodo from './DailyTodo'

export default function TimeColumn (props) {
  let { timeOfDay, weekDayTodos } = props
  return (
    <React.Fragment>
      {timeOfDay.map((time) => {
        return (
          <tr>
            <td>{time}</td>
            {weekDayTodos.map((weekDayTodo) => {
              timeOfDay.map((time) => {
                if (weekDayTodo.todo_start_time === time) {
                  return (
                    <DailyTodo weekDayTodo={weekDayTodos.title} startTime={weekDayTodo.todo_start_time} timeOfDay={timeOfDay} />
                  )
                }
              })
            })}
          </tr>
        )
      })}
    </React.Fragment>
  )
}
