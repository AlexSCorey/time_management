import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

// import DailyTodo from './DailyTodo'
// import TimeColumn from './TimeColumn'

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
          <tbody>
            {timeOfDay.map((cell) => {
              // let todoTitle = this.todoTitle(cell, weekDayTodos)
              let weekDayTodo = this.todoInCell(cell, weekDayTodos)
              return (
                <tr className={weekDayTodo ? 'todoCell' : null}>
                  <td>{cell.startTime.format('h:mma')}</td>
                  <td>{weekDayTodo ? weekDayTodo.title : null}</td>
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
