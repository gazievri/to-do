import { useEffect, useState } from 'react';
import { Title } from '../components/Title';
import { AddItem } from '../components/AddItem';
import { ListItems } from '../components/ListItems';

const Main = ({ handleSwitchTheme, isNight }) => {
  
  // Переменная для списка задач
  const [listItems, setListItems] = useState([]);

  // Обработчик добавления новой задачи
  const handleAddItem = (data) => {
    const newList = [...listItems, data];
    setListItems(newList);
  };

  // Обработчик удаления задачи
  const handleDeleteItem = (id) => {
    const newList = listItems.filter((el) => el.id !== id);
    setListItems(newList);
  };

  // Записывает в LocalStorage обновленный массив с задачами при его изменении. Пустой массив не записывает. 
  useEffect(() => {
    if (listItems.length > 0) {
      localStorage.setItem('userList', JSON.stringify(listItems));
    }
  }, [listItems]);

  // Выгружаю массив с задачами при перезагрузке страницы
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));
    if (userList) {
      setListItems(userList);
    }
  }, []);

  return (
    <div className="main">
      <Title handleSwitchTheme={handleSwitchTheme} />
      <AddItem handleClickAdd={handleAddItem} isNight={isNight} />
      <ListItems
        listItems={listItems}
        handleDeleteItem={handleDeleteItem}
        isNight={isNight}
      />
    </div>
  );
};

export { Main };
