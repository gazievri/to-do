const Footer = ({ isNight }) => {
  return (
    <div className={`footer ${isNight && 'footer__night-theme_active'}`} />
  );
};
export { Footer };
