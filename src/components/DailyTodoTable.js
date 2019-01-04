import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

import DailyTodo from './DailyTodo'

class DailyTodoTable extends Component {
  render () {
    const hours = ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '23']
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
                return (
                  <tr>
                    <td>{time}</td>
                    
                    {weekDayTodos.map((weekDayTodo) => {
                      return (
                        <DailyTodo time={time} weekDayTodo={weekDayTodo} />
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default DailyTodoTable
