import React, { Component } from 'react'
import { Label, Input, Button, Dropdown, DropdownTrigger, Icon, DropdownMenu, DropdownContent, DropdownDivider, DropdownItem } from 'bloomer'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      hour: '0',
      min: '0',
      dropDownHour: false,
      dropDownMin: false
    }
    this.onNewTodo = this.onNewTodo.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }

  onNewTodo (event) {
    this.setState({ value: event.target.value })
  }
  onSaveTodo (event) {
    event.preventDefault()
    this.props.onSaveTodo(this.state.value)
    this.setState({ value: '' })
  }
  activateDropdown (e, field) {
    e.preventDefault()
    if (field === 'hour') {
      this.setState(state => ({ dropDownHour: !state.dropDownHour }))
    } else {
      this.setState(state => ({ dropDownMin: !state.dropDownMin }))
    }
  }
  changeHour (e, value) {
    e.preventDefault()
    this.setState(state => ({ hour: value,
      dropDownHour: !state.dropDownHour }))
  }
  changeMin (e, value) {
    e.preventDefault()
    this.setState(state => ({ min: value,
      dropDownMin: !state.dropDownMin }))
  }
  render () {
    return (
      <div className='container'>
        <form>
          <Label>Add new To do item</Label>
          <Input value={this.state.value} onChange={this.onNewTodo} />
          <Dropdown isActive={this.state.dropDownHour} className='button'>
            <DropdownTrigger>
              <Button isOutlined aria-haspopup='true' value='hour' aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e, 'hour')}>
                <span>{this.state.hour}</span>
                <Icon icon='angle-down' isSize='small' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu >
              <DropdownContent >
                <DropdownItem onClick={e => { this.changeHour(e, '1') }}>1 Hour</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeHour(e, '2') }}>2 Hours</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeHour(e, '3') }}>3 Hours</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeHour(e, '4') }}>4 Hours</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeHour(e, '5') }}>5 Hours</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeHour(e, '6') }}>6 Hours</DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isActive={this.state.dropDownMin} className='button'>
            <DropdownTrigger>
              <Button isOutlined aria-haspopup='true' value='min' aria-controls='dropdown-menu' onClick={e => this.activateDropdown(e)}>
                <span>{this.state.min}</span>
                <Icon icon='angle-down' isSize='small' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu >
              <DropdownContent>
                <DropdownItem onClick={e => { this.changeMin(e, '15') }}>15 Mins</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeMin(e, '30') }}>30 Mins</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={e => { this.changeMin(e, '45') }}>45 Mins</DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div />
          <Button type='submit' onClick={this.onSaveTodo} className='button'>Save</Button>
        </form>
      </div>
    )
  }
}
export default AddTodo
