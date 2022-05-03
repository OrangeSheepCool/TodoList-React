import { ACTION_TYPE, ITodo, removeTodoAction, removeTodoListAction, setStatusAction, setStatusListAction, setTodoAction, setTodoListAction } from "./common";

export const setTodo = (payload: ITodo): setTodoAction => ({
  type: ACTION_TYPE.SET_TODO,
  payload
})

export const setTodoList = (payload: ITodo[]): setTodoListAction => ({
  type: ACTION_TYPE.SET_TODO_LIST,
  payload
})

export const removeTodo = (payload: number): removeTodoAction => ({
  type: ACTION_TYPE.REMOVE_TODO,
  payload
})

export const removeTodoList = (payload: null): removeTodoListAction => ({
  type: ACTION_TYPE.REMOVE_TODO_LIST,
  payload
})

export const setStatus = (payload: number): setStatusAction => ({
  type: ACTION_TYPE.SET_STATUS,
  payload
})

export const setStatusList = (payload: boolean): setStatusListAction => ({
  type: ACTION_TYPE.SET_STATUS_LIST,
  payload
})
