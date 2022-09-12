import { React, useEffect, useState } from 'react';
import Header from './layout/Header';
import { Main } from './layout/Main';

function App() {
  // Флаг для ночной темы. Значения флага загружается из LocalStorage или false
  const [isNight, setIsNight] = useState(
    JSON.parse(localStorage.getItem('theme'))
      ? JSON.parse(localStorage.getItem('theme'))
      : false,
  );

  // Обработчик клика на переключатель темы
  const handleSwitchTheme = () => {
    setIsNight(!isNight);
  };

  // Записываю текущую тему в LocalStorage
  useEffect(() => {
    const userTheme = JSON.stringify(isNight);
    localStorage.setItem('theme', userTheme);
  }, [isNight]);

  return (
    <div className={`body ${isNight && 'body_night-theme_active '}`}>
      <Header isNight={isNight} />
      <Main handleSwitchTheme={handleSwitchTheme} isNight={isNight} />
    </div>
  );
}

export default App;
