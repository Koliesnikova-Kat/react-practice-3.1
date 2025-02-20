import Text from '../Text/Text';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from '../../redux/todoSlice';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const Todo = ({ id, text, todoNumber }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteTodo(id));

  const onEdit = () => dispatch(setCurrentTodo({ id, text }));

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {todoNumber}
      </Text>

      <Text>{text}</Text>

      <button className={style.deleteButton} type="button" onClick={onDelete}>
        <RiDeleteBinLine size={24} />
      </button>

      <button className={style.editButton} type="button" onClick={onEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
