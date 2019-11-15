import React, { Fragment, Component } from 'react'
import axios from 'axios'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import store from './store'
import { changeInputAction, addItem, deleteItem, getListAction } from './store/actionCreators'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)

  }
  changeInputValue (e) {
    const action = changeInputAction(e.target.value)
    // 通过dispatch方法传递给store
    store.dispatch(action)
  }
  storeChange () {
    this.setState(store.getState())
  }
  clickBtn () {
    const action = addItem()
    store.dispatch(action)
  }
  deleteItem (index) {
    const action = deleteItem(index)
    store.dispatch(action)
  }
  componentDidMount () {
    axios.get('https://easydoc.xyz/mock/mKIaPTZV').then(res => {
      const data = res.data
      const action = getListAction(data)
      store.dispatch(action)
    })
  }
  render () {
    return (
      <Fragment>
        <Input
          style={{ width: '250px' }}
          onChange={this.changeInputValue}
          value={this.state.inputValue}
        />
        <Button type="primary" onClick={this.clickBtn}>增加</Button>
        <TodoItem content={this.state.list} deleteItem={(index) => {this.deleteItem(index)}}></TodoItem>
      </Fragment>
    )
  }
}


export default TodoList