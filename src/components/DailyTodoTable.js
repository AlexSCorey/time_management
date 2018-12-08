import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'

class DailyTodoTable extends Component {
  render () {
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 15, 17, 18, 19, 20, 21, 22, 23, 24]
    const mins = ['start', 15, 30, 45]
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
                if (min === 'start') {
                  return (
                    <tr>
                      <td>
                        {moment().hour(hour).minute('00').format('h:mma')}
                      </td>
                    </tr>)
                } else {
                  return (
                    <tr>
                      <td>
                        {moment().hour(hour).minute(min).format('h:mma')}
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
