import React, { Component } from 'react'
import { List } from 'antd'

class TodoItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <List 
        bordered 
        dataSource={this.props.content}
        renderItem={(item, index)=> (
          <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>
        )}
      ></List>
    )
  }
}

export default TodoItem