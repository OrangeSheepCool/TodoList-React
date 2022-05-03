import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { IState, ITodo } from '../../store/common';
import TodoItem from '../TodoItem';
import './index.css';

const TodoBody: FC = () => {
  const todoList: ITodo[] = useSelector((state: IState) => state.todoList)

  return (
    <div className='todo-body'>
      {
        todoList.map((todo: ITodo): ReactElement => <TodoItem key={todo.id} todo={todo} />)
      }
    </div>
  )
}

export default TodoBody
