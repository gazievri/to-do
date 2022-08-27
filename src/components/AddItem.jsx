import { useState } from 'react';

const AddItem = ({ handleClickAdd, isNight }) => {
  const [value, setValue] = useState('');

  // Устанавливает текущее значение input в переменную value при любом изменении в input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Обработчик нажатия клавиши Enter в input при добавлении задачи
  const handleKey = (e) => {
    if (e.key === 'Enter' && value.length > 0) {
      setValue('');
      const task = {
        status: false,
        text: value,
        // ID генерируется через дату (используется время создания задачи). Это обеспечивает уникальность id
        id: Number(new Date().getTime()),
      };
      handleClickAdd(task);
    }
  };

  return (
    <form className="new-task" name="addTask">
      <input
        className={`new-task__input ${
          isNight && 'new-task__input_night-theme_active'
        }`}
        placeholder="Add New Task"
        name="addNewTask"
        id="addNewTask"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        type="text"
        minLength={1}
        maxLength={30}
        autoFocus
      ></input>
    </form>
  );
};
export { AddItem };
