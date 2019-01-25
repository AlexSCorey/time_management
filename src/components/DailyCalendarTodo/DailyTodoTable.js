import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

class DailyTodoTable extends Component {
  todoInCell (cell, weekDayTodos) {
    return (
      weekDayTodos.find((weekDayTodo) => {
        let todoStartTime = weekDayTodo.todo_start_time.startOf('minute')
        let todoEndTime = moment(new Date(todoStartTime)).add(weekDayTodo.duration, 'minute').startOf('minute')

        if (todoStartTime <= cell.startTime.startOf('minute') && todoEndTime >= cell.endTime.startOf('minute')) {
          return weekDayTodo
        }
      })
    )
  }

  todoTitle (cell, weekDayTodos) {
    let todo = this.todoInCell(cell, weekDayTodos)
    if (todo) {
      return todo.title
    }
  }
  cellClassName (cell, weekDayTodo) {
    console.log(weekDayTodo, 'here')
    let todoStartTime = weekDayTodo.todo_start_time.startOf('minute')
    let todoEndTime = moment(new Date(todoStartTime)).add(weekDayTodo.duration, 'minute').startOf('minute')
    if (todoStartTime <= cell.startTime) {
      return ('cellTopBorder')
    } if (todoEndTime >= cell.endTime) {
      return ('cellBottomBorder')
    } else {
      return ('cellSideBorder')
    }
  }
  render () {
    let { todos, weekDay, timeOfDay } = this.props
    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>
                {weekDay}
              </th>
              <th>
              Todo
              </th>
            </tr>
          </thead>
          <tbody className='calendarScreen'>
            {timeOfDay.map((cell) => {
              let weekDayTodo = this.todoInCell(cell, weekDayTodos)
              return (
                <tr className={weekDayTodo ? 'todoCell' : null}>
                  <td className='cell' title={weekDayTodo ? weekDayTodo.title : null}>
                    <a className='cellText'>{weekDayTodo ? weekDayTodo.title : null}</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default DailyTodoTable
