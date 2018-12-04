import React, { Component } from 'react'
import moment from 'moment'
// import duration from 'moment-duration-format'

class DailyTodo extends Component {
  render () {
    let { durations, todos, weekDay } = this.props
    let total
    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })
    // let todoDurations = weekDayTodos.reduce((acc, curr) => {
    //   return (total = acc + curr)
    // })

    console.log(weekDayTodos, 'week day todos')
    durations.reduce((acc, current) => {
      return (total = acc + current)
    })
    let workAndSleep = 960
    let occupiedTime = total + workAndSleep

    let freeTime = Math.round(1440 - occupiedTime)
    let freeTimePerc = Math.round(freeTime / 1440 * 100)

    if (durations) {
      return (
        <div>
          <div className='graphs'>
            {/* <div className='graphContainer'>
              <div className='headerAndTime'>
                <div className='timeTitle'>Free Time</div>
                <div className='dailyTodoRow'>{moment.duration(freeTime, 'minutes').format('h:mm')}</div>
              </div>
              <div className='freeTime time'>
                <div className='freeTimePerc perc' style={{ height: `${freeTimePerc}%` }}>{freeTimePerc}%</div>
              </div>
            </div> */}
            <div className='graphContainer'>
              <div className='headerAndTime occupiedTime'>
                <div className='timeTitle'>Occupied Time</div>
              </div>
              <div className='occupiedTime time'>
                { weekDayTodos.map((weekDayTodo) => {
                  const occupiedTimePerc = Math.round(weekDayTodo.duration / 1440 * 100)
                  return (
                    <div>
                      <div className='occupiedTimePerc perc' style={{ height: `${occupiedTimePerc}%` }}>{occupiedTimePerc}%</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Loading</div>)
    }
  }
}

export default DailyTodo
