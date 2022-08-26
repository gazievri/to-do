import { useState } from 'react';

const Item = ({ item, handleDeleteItem, isNight }) => {
  const { id, status } = item;
  const [isComplete, setIsComplete] = useState(status);
  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(item.text);

  const handleDeleteClick = () => {
    handleDeleteItem(id);
  };

  const handleCheckBox = () => {
    setIsComplete(!isComplete);
  };

  const handleEditClick = () => {
    setIsEdited(!isEdited);
  };

  const handleEditText = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEdited(!isEdited);
    }
  };

  return (
    <li className="task">
      <input
        className="task__complete-btn"
        name={id}
        value=""
        onChange={handleCheckBox}
        type="checkbox"
      ></input>
      {!isEdited ? (
        <p
          className={`task__text ${
            !isComplete ? 'task___text_status_complete' : ''
          }`}
          onClick={handleEditClick}
        >
          {text}
        </p>
      ) : (
        <input
          className={`task__text-edit-input ${
            isNight && 'task__text-edit-input_night-theme_active'
          }`}
          name="textEdit"
          onChange={handleEditText}
          value={text}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}

      <div className="task__edit-btn" onClick={handleEditClick} />

      <div className="task__delete-btn" onClick={handleDeleteClick} />
    </li>
  );
};
export { Item };
