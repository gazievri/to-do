import { useState } from 'react';

const AddItem = ({ handleClickAdd, isNight }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      setValue('');
      const task = {
        status: true,
        text: value,
        id: Number(new Date().getTime()),
      };
      handleClickAdd(task);
    }
  };

  return (
    <div className="new-task">
      <input
        className={`new-task__input ${
          isNight && 'new-task__input_night-theme_active'
        }`}
        placeholder="Add New Task"
        name="AddNewTask"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
      ></input>
    </div>
  );
};
export { AddItem };
