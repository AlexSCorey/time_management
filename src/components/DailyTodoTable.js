import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

class DailyTodoTable extends Component {
  render () {
    const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    const mins = ['00', '15', '30', '45']
    let { todos, weekDay } = this.props
    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>
              Todo
              </th>
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) =>
              mins.map((min) => {
                let time = moment().hour(hour).minute(min).format('h:mma')
                // weekDayTodos.map((weekDayTodo) => {
                // console.log(weekDayTodo, 'todo')
                return (
                  <tr>
                    <td>{time}</td>
                    {weekDayTodos.map((weekDayTodo) => {
                      if (weekDayTodo.todo_start_time === time) {
                        return (
                          <tr>
                            <td>{weekDayTodo.title}</td>
                          </tr>
                        )
                      }
                    })}
                  </tr>
                )
                // })
              })
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default DailyTodoTable
