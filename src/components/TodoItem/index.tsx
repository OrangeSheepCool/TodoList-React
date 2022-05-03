import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Button, Modal } from 'antd';
import { removeTodo, setStatus } from '../../store/actions';
import { ITodo, TODO_STATUS } from '../../store/common';
import './index.css';

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch()

  const setTodoStatus = useCallback(() => dispatch(setStatus(todo.id)), [dispatch, todo.id])

  const removeTodoItem = useCallback(() => dispatch(removeTodo(todo.id)), [dispatch, todo.id])

  const handleRemoveClick = () => Modal.warning({
    title: '确认移除待办事项',
    closable: true,
    onOk() {
      removeTodoItem()
    }
  })

  return (
    <div className='flex-col todo-item'>
      <Checkbox
        checked={todo.status === TODO_STATUS.FINISHED}
        onChange={setTodoStatus}
      />
      <span
        className={todo.status === TODO_STATUS.FINISHED ? 'finished' : 'willdo'}
      >{todo.content}</span>
      <Button
        danger
        type='ghost'
        onClick={handleRemoveClick}
      >移除</Button>
    </div>
  )
}

export default TodoItem