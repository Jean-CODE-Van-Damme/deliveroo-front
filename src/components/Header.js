const Header = ({ name }) => {
  return (
    <header>
      <div className="container">
        <img src={name} alt="" />
      </div>
    </header>
  );
};

export default Header;
