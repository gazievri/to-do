import { Item } from './Item';

const ListItems = ({ listItems, handleDeleteItem, isNight }) => {
  return (
    <ul className={`list-tasks ${isNight && 'list-tasks_night-theme_active'}`}>
      {listItems.map((el) => (
        <Item
          key={el.id}
          item={el}
          handleDeleteItem={handleDeleteItem}
          isNight={isNight}
        />
      ))}
    </ul>
  );
};

export { ListItems };
