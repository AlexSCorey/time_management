import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    // this.onNewTodo = this.onNewTodo.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }

  // onNewTodo (event) {
  //   this.props.onNewTodo(event.target.value)
  // }
  onSaveTodo (event) {
    event.preventDefault()
    this.props.onSaveTodo(this.state.value)
    this.setState({ value: '' })
  }
  render () {
    let { todo } = this.props
    return (
      <div className='App'>
        <form>
          <label>Add new To do item</label>
          <input value={this.state.value} onChange={event => { this.setState({ value: event.target.value }) }} />
          <button type='submit' onClick={this.onSaveTodo}>Save</button>
        </form>
        <div>
          {todo.map((todo) =>
            <div key={todo.id}>{todo.todo}</div>
          )}
        </div>
      </div>
    )
  }
}

export default TodoList
