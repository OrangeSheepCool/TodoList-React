import { ITodo } from "../typings"

export interface IUseLocalStorage {
  getLocalList: () => ITodo[],
  setLocalList: (todoList: ITodo[]) => void
}

export const useLocalStorage = (): IUseLocalStorage => {
  
  function getLocalList(): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return {
    getLocalList,
    setLocalList
  }
}