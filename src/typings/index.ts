export enum ACTION_TYPE {
  SET_TODO = 'SET_TODO',
  SET_TODO_LIST = 'SET_TODO_LIST',
  REMOVE_TODO = 'REMOVE_TODO',
  REMOVE_TODO_LIST = 'REMOVE_TODO_LIST',
  SET_STATUS = 'SET_STATUS',
  SET_STATUS_LIST = 'SET_STATUS_LIST'
}

export enum TODO_STATUS {
  WILLDO = 'willdo',
  FINISHED = 'finished'
}

export interface IAction<T extends string, P>{
  type: T,
  payload: P
}

export interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS
}

export type IState = {
  todoList: ITodo[]
}

export type setTodoAction = IAction<ACTION_TYPE.SET_TODO, ITodo>

export type setTodoListAction = IAction<ACTION_TYPE.SET_TODO_LIST, ITodo[]>

export type removeTodoAction = IAction<ACTION_TYPE.REMOVE_TODO, number>

export type removeTodoListAction = IAction<ACTION_TYPE.REMOVE_TODO_LIST, null>

export type setStatusAction = IAction<ACTION_TYPE.SET_STATUS, number>

export type setStatusListAction = IAction<ACTION_TYPE.SET_STATUS_LIST, boolean>

export type Action = setTodoAction | setTodoListAction | removeTodoAction | removeTodoListAction | setStatusAction | setStatusListAction