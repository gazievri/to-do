import { useEffect, useState } from 'react';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';

function App() {
  const [isNight, setIsNight] = useState(
    JSON.parse(localStorage.getItem('theme'))
      ? JSON.parse(localStorage.getItem('theme'))
      : false
  );

  const handleSwitchTheme = () => {
    setIsNight(!isNight);
  };

  useEffect(() => {
    const userTheme = JSON.stringify(isNight);
    localStorage.setItem('theme', userTheme);
  }, [isNight]);

  return (
    <div>
      <Header isNight={isNight} />
      <Main handleSwitchTheme={handleSwitchTheme} isNight={isNight} />
      <Footer isNight={isNight} />
    </div>
  );
}

export default App;
