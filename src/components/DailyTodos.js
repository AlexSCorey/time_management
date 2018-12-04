// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Doughnut} from 'react-chartjs-2'
// import moment from 'moment'

// const pieOptions = {
//   title: '',
//   pieHole: 0.6,
//   slices: [
//     {
//       color: '#2BB673'
//     },
//     {
//       color: '#d91e48'
//     },
//     {
//       color: '#007fad'
//     },
//     {
//       color: '#e9a227'
//     },
//     {
//       color: '#e9a227'
//     },
//     {
//       color: '#e9a227'
//     },
//     {
//       color: '#e9a227'
//     },
//     {
//       color: '#e9a227'
//     }
//   ],
//   legend: {
//     position: 'bottom',
//     alignment: 'center',
//     textStyle: {
//       color: '233238',
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     showColorCode: true
//   },
//   chartArea: {
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '80%'
//   },
//   fontName: 'Roboto'
// }
// class DailyTodo extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       chartImageURI: ''
//     }
//   }
//   componentDidMount () {
//     let { todos, weekDay } = this.props
//     let todoDurations = []
//     let total
//     let todosArray = []
//     todosArray.push(['Todo', 'Time'])

//     let weekDayTodos = todos.filter(todo => {
//       return (moment(todo.date).format('dddd') === weekDay)
//     })

//     weekDayTodos.map((weekDayTodo) => {
//       return (
//         todosArray.push([weekDayTodo.title, weekDayTodo.duration]),
//         todoDurations.push(weekDayTodo.duration),
//         todoDurations.reduce((acc, curr) => {
//           return (total = acc + curr)
//         })
//       )
//     })
//     this.setState({ todosArray: todosArray })
//     todoDurations.push(total)
//   }
//   render () {
//     // todosArray.push(['todosArray', todosArray])
//     console.log(this.state.todosArray, 'todosArray')
//     if (this.state.todosArray && this.state.todosArray.length > 0) {
//       return (
//         <div>
//           <Doughnut
//             chartType='PieChart'
//             data={[this.state.todosArray]}
//             options={pieOptions}
//             graph_id='PieChart'
//             width={'100%'}
//             height={'400px'}
//             legend_toggle
//           />
//         </div>
//       )
//     } else {
//       return (
//         <div>Nothing</div>
//       )
//     }
//   }
// }

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
    // todosArray.push(['Todo', 'Time'])

    let weekDayTodos = todos.filter(todo => {
      return (moment(todo.date).format('dddd') === weekDay)
    })

    weekDayTodos.map((weekDayTodo) => {
      return (
        todosArray.push(
          // weekDayTodo.title,
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
          {/* <div className='graphs'>
            <div className='graphContainer'>
            <div className='headerAndTime occupiedTime'>
            <div className='timeTitle'>Occupied Time</div>
          </div> */}
          <Bar chartType='Bar'
            data={data}
            // options={{ pieOptions }}
            slices={'#2BB673'}
            graph_id='PieChart'
            // width={ 100% }
            // height={'400px'}
            backgroundColor={'red'}
            legend_toggle />
          {/* <div className='occupiedTime time'>
                { weekDayTodos.map((weekDayTodo) => {
                  const occupiedTimePerc = Math.round(weekDayTodo.duration / 1440 * 100)
                  return (
                    <div className='occupiedTimePerc perc' style={{ height: `${occupiedTimePerc}%` }}>{occupiedTimePerc}%</div>
                    )
                  })}
                </div> */}
          {/* </div>
          </div> */}
          {console.log(todoDurations, 'todos array')}
        </div>
      )
    } else {
      return (<div>Loading</div>)
    }
  }
}
// const pieOptions = {
//   title: '',
//   pieHole: 0.6,
//   slices: [
//     {
//       color: '#2BB673'
//     },
//     {
//       color: '#d91e48'
//     },
//     {
//       color: '#007fad'
//     },
//     {
//       color: '#e9a227'
//     }
//   ],
//   legend: {
//     position: 'bottom',
//     alignment: 'center',
//     textStyle: {
//       color: '233238',
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     showColorCode: true
//   },
//   chartArea: {
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '80%'
//   },
//   fontName: 'Roboto'
// }

export default DailyTodo
