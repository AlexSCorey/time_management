import React, { Component } from 'react'

class TodoList extends Component {
  render () {
    let { todos } = this.props
    return (
      <div className='container'>
        {todos.map((todo) =>
          <div key={todo.id}>
            <div>{todo.title}</div>
            {/* <div>{todo.duration}</div>
              <div>{todo.date}</div> */}
          </div>
        )}
      </div>
    )
  }
}

export default TodoList
