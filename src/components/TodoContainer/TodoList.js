import React, { Component } from 'react'
import moment from 'moment'
import duration from 'moment-duration-format'
class TodoList extends Component {
  render () {
    let { todos } = this.props
    return (
      <div className='todoList'>
        <div className='tableContainer'>
          <table className='tbodyContainer'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {todos.map((todo) =>
                <tr key={todo.id} height={`${todo.percent}vh`} className='row'>
                  <td>{todo.title}</td>
                  <td>{moment.duration(todo.duration, 'minutes').format('h:mm')}</td>
                  <td>{todo.date}</td>
                  <td><i className='far fa-edit' /></td>
                  <td><i className='fa fa-trash' /></td>
                </tr>)}
              <tr height={'33vh'} className='row'>
                <td>Work</td>
                <td>8 hours</td>
                <td>Everyday</td>
                <td />
                <td />
              </tr>
              <tr height={'30vh'} className='row'>
                <td>Sleep</td>
                <td>8 Hours</td>
                <td>Everyday</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div></div>
    )
  }
}
export default TodoList
