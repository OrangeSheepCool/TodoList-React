import { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Checkbox, message } from 'antd';
import { removeTodoList, setStatusList } from '../../store/actions';
import { IState, ITodo, TODO_STATUS } from '../../typings';
import './index.css';

const TodoFooter: FC = () => {
  const todoList: ITodo[] = useSelector((state: IState) => state.todoList)

  const hasFinished: boolean = useMemo(() => todoList.length > 0 && todoList.some((todo: ITodo): boolean => todo.status === TODO_STATUS.FINISHED), [todoList])
  const allFinished: boolean = useMemo(() => todoList.length > 0 && todoList.every((todo: ITodo): boolean => todo.status === TODO_STATUS.FINISHED), [todoList])

  const dispatch = useDispatch()

  const setTodoListStatus = useCallback(() => dispatch(setStatusList(!allFinished)), [dispatch, allFinished])
  const removeFinishedList = useCallback(() => dispatch(removeTodoList(null)), [dispatch])

  const handleRemoveFinishList = () => {
    !hasFinished ?
      message.warning('没有已完成待办事项', 1) :
      Modal.warning({
        title: '确认移除已完成待办事项',
        closable: true,
        onOk() {
          removeFinishedList()
        }
      })
  }

  return (
    <div className='flex-col todo-footer'>
      <div>
        <Checkbox
          checked={allFinished}
          onChange={setTodoListStatus}
        />
        <span>全选</span>
      </div>
      <div
        className='todo-remove-finished'
        onClick={handleRemoveFinishList}
      >移除已完成的待办事项</div>
    </div>
  )
}

export default TodoFooter