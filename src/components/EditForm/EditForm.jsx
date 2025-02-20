import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editTodo, setCurrentTodo } from '../../redux/todoSlice';

const EditForm = () => {
  const dispatch = useDispatch();

  const currentTodo = useSelector(state => state.todo.currentTodo);

  const [text, setText] = useState(currentTodo?.text || '');

  const onSubmit = e => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(editTodo({ id: currentTodo.id, text }));

    setText;
  };

  const onCancel = () => dispatch(setCurrentTodo(null));

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={onCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
