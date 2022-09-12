const Header = ({ isNight }) => {
  return <div className={`header ${isNight && 'header_night-theme_active'}`} />;
};

export default Header;
