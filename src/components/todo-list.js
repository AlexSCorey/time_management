import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onNewTodo = this.onNewTodo.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }

  onNewTodo (event) {
    this.setState({ value: event.target.value })
    console.log(event.target.value, 'event value')
    // this.props.onNewTodo(event.target.value)
  }
  onSaveTodo (event) {
    event.preventDefault()
    console.log(this.props, this.state, 'props and state')
    this.props.onSaveTodo(this.state.value)
    this.setState({ value: '' })
    // this.props.onSaveTodo(this.props.creatingTodo)
  }
  render () {
    let { todos } = this.props
    if (todos.length > 0) {
      return (
        <div className='App'>
          <form>
            <label>Add new To do item</label>
            <input value={this.state.value} onChange={this.onNewTodo} />
            <button type='submit' onClick={this.onSaveTodo}>Save</button>
          </form>
          <div>
            {todos.map((todo) =>
              <div key={todo.id}>
                <div>{todo.title}</div>
              </div>
            )}
          </div>
        </div>
      )
    } else {
      return (<div className='App'>
        <form>
          <label>Add new To do item</label>
          <input value={this.state.value} onChange={this.onNewTodo} />
          <button type='submit' onClick={this.onSaveTodo}>Save</button>
        </form>
      </div>)
    }
  }
}

export default TodoList
