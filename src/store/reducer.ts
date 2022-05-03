import { message } from 'antd';
import { Action, ACTION_TYPE, IState, ITodo, TODO_STATUS } from "../typings";

const initialState: IState = {
  todoList: []
}

const reducer = (state: IState = initialState, { type, payload }: Action) => {
  let updatedList: ITodo[] = state.todoList
  switch (type) {
    case ACTION_TYPE.SET_TODO:
      updatedList = state.todoList.filter((todo: ITodo): boolean => todo.content !== payload.content)
      message.success('待办事项添加成功！', 1)
      return ({ todoList: [payload, ...updatedList] })
    
    case ACTION_TYPE.SET_TODO_LIST:
      return ({ todoList: payload })
    
    case ACTION_TYPE.REMOVE_TODO:
      updatedList = state.todoList.filter((todo: ITodo): boolean => todo.id !== payload)
      message.success('待办事项移除成功！', 1)
      return ({ todoList: updatedList })
    
    case ACTION_TYPE.REMOVE_TODO_LIST:
      updatedList = state.todoList.filter((todo: ITodo): boolean => todo.status !== TODO_STATUS.FINISHED)
      message.success('已完成待办事项移除成功！', 1)
      return ({ todoList: updatedList })
    
    case ACTION_TYPE.SET_STATUS:
      const item: ITodo = state.todoList.find((todo: ITodo): boolean => todo.id === payload) as ITodo
      const updatedItem: ITodo = { ...item, status: item.status === TODO_STATUS.FINISHED ? TODO_STATUS.WILLDO : TODO_STATUS.FINISHED }
      updatedList = state.todoList.filter((todo: ITodo): boolean => todo.id !== payload)
      if (item?.status === TODO_STATUS.FINISHED) {
        const idx: number = state.todoList.findIndex((todo: ITodo): boolean => todo.status === TODO_STATUS.FINISHED)
        idx > -1 ? updatedList.splice(idx, 0, updatedItem) : updatedList.push(updatedItem)
      } else {
        updatedList.push(updatedItem)
      }
      return ({ todoList: updatedList })
    
    case ACTION_TYPE.SET_STATUS_LIST:
      updatedList = state.todoList.map((todo: ITodo): ITodo => ({ ...todo, status: payload ? TODO_STATUS.FINISHED : TODO_STATUS.WILLDO }))
      return ({ todoList: updatedList })
    
    default:
      return state
  }
}

export default reducer