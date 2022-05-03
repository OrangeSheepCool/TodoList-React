import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { message, Input, Button } from 'antd';
import { setTodo } from '../../store/actions';
import { ITodo, TODO_STATUS } from '../../typings';

const TodoHeader: FC = () => {
  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()

  const addTodoItem = () => {
    if (!content.trim()) {
      message.warning('待办事项内容不能为空！', 1)
    } else {
      const todoItem: ITodo = {
        id: new Date().getTime(),
        content,
        status: TODO_STATUS.WILLDO
      }
      dispatch(setTodo(todoItem))
      setContent('')
    }
  }

  return (
    <div className='flex-col todo-header'>
      <Input
        placeholder='请输入待办事项'
        value={content}
        onChange={e => setContent(e.target.value)}
        onPressEnter={addTodoItem}
      />
      <Button
        type='primary'
        onClick={addTodoItem}
      >添加</Button>
    </div>
  )
}

export default TodoHeader
