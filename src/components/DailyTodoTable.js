import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

class DailyTodoTable extends Component {
  render () {
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 15, 17, 18, 19, 20, 21, 22, 23, 24]
    const mins = ['start', 15, 30, 45]
    let { todos, weekDay } = this.props

    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })
    console.log(this.props, 'this.props')
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
                let startOfHour = moment().hour(hour).minute('00').format('h:mma')
                let insideHour = moment().hour(hour).minute(min).format('h:mma')
                if (min === 'start') {
                  return (
                    <tr>
                      <td>
                        { weekDayTodos.map(startTime => {
                          if (startTime.todo_start_time === startOfHour) {
                            return (
                              <td>{startTime.title}</td>
                            )
                          }
                        })}
                      </td>
                      <td className={`${startOfHour}`}>
                        {startOfHour}
                      </td>
                    </tr>)
                } else {
                  return (
                    <tr>
                      <td>
                        { weekDayTodos.map(startTime => {
                          if (startTime.todo_start_time === insideHour) {
                            return (
                              <td>{startTime.title}</td>
                            )
                          }
                        })}
                      </td>
                      <td>
                        {insideHour}
                      </td>
                    </tr>
                  )
                }
              }))}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default DailyTodoTable
