import React, { Component } from 'react'

class TodoList extends Component {
  render () {
    let { todos } = this.props
    return (
      <div className='container'>
        <table >
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) =>
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.duration}</td>
                <td>{todo.date}</td>
                <td><i className='far fa-edit' /></td>
                <td><i className='fa fa-trash' /></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
export default TodoList
