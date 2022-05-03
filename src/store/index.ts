import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { IUseLocalStorage, useLocalStorage } from '../hooks';
import { IState } from './common';
import reducer from './reducer'

const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => {
  const { todoList }: IState =  store.getState()
  const { setLocalList }: IUseLocalStorage = useLocalStorage()
  setLocalList(todoList)
})

export default store