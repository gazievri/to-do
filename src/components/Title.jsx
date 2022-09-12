import { React } from 'react';

const Title = ({ handleSwitchTheme }) => {
  return (
    <div className="title-block">
      <h1 className="title-block__title">TO DO</h1>
      <div className="title-block__theme-btn" onClick={handleSwitchTheme}></div>
    </div>
  );
};

export default Title;
