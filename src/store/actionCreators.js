import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItem = () => ({
  type: ADD_ITEM
})

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})