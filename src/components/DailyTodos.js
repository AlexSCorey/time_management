import React, { Component } from 'react'
import moment from 'moment'
import { Bar } from 'react-chartjs-2'
class DailyTodo extends Component {
  render () {
    let { todos, weekDay } = this.props
    let todoDurations = []
    let labels = []
    let total
    let todosArray = []

    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })

    weekDayTodos.map((weekDayTodo) => {
      return (
        todosArray.push(
          weekDayTodo.duration),
        todoDurations.push(weekDayTodo.duration),
        labels.push(weekDayTodo.title),
        todoDurations.reduce((acc, curr) => {
          return (total = acc + curr)
        })
      )
    })

    let freeTime = (1440 - total)
    todosArray.push(freeTime)
    labels.push(
      'Free Time')
    const data = { labels: labels,
      datasets: [{ data: todosArray }]
    }
    if (todos) {
      return (
        <div>
          <Bar chartType='Bar'
            data={data}
            slices={'#2BB673'}
            graph_id='PieChart'
            backgroundColor={'red'}
            legend_toggle />
        </div>
      )
    } else {
      return (<div>Loading</div>)
    }
  }
}

export default DailyTodo
