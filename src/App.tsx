import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoFooter from './components/TodoFooter';
import { IUseLocalStorage, useLocalStorage } from './hooks';
import { setTodoList } from './store/actions';
import { ITodo } from './store/common';
import './App.css';

const App: FC = () => {

  const dispatch = useDispatch()

  const { getLocalList }: IUseLocalStorage = useLocalStorage()

  useEffect(() => {
    const list: ITodo[] = getLocalList()
    list.length && dispatch(setTodoList(list))
  }, [dispatch, getLocalList])

  return (<div className="App">
    <div className='todo-title'>待办事项</div>
    <TodoHeader></TodoHeader>
    <TodoBody></TodoBody>
    <TodoFooter></TodoFooter>
  </div>
  )
}

export default App;