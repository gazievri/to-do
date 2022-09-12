import { React } from 'react';
import { Item } from './Item';

const ListItems = ({
  listItems = [],
  handleDeleteItem = Function.prototype,
  isNight,
  handleCompleteStatusUpdate,
}) => {
  return (
    <ul className={`list-tasks ${isNight && 'list-tasks_night-theme_active'}`}>
      {listItems.map((el) => (
        <Item
          key={el.id}
          item={el}
          handleDeleteItem={handleDeleteItem}
          isNight={isNight}
          handleCompleteStatusUpdate={handleCompleteStatusUpdate}
        />
      ))}
    </ul>
  );
};

export { ListItems };
