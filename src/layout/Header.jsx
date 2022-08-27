const Header = ({ isNight }) => {
  // В зависимости от выбранной темы меняется оверлей на картинке header'а
  return <div className={`header ${isNight && 'header_night-theme_active'}`} />;
};

export { Header };
