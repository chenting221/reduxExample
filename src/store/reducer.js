
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
} 
export default ( state = defaultState, action ) => {
  // 就是一个方法函数
  // state是整个项目中需要管理的数据信息，这里我们没有什么数据，所以用空对象来表示。
  // reducer里只能接收state, 不能改变state;所以我们声明了一个新变量，然后再次用return返回回去
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  return state
}