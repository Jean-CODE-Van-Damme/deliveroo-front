const Aside = ({ title, text, picture }) => {
  return (
    <>
      <div className="container">
        <div className="aside">
          <div className="aside-left">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="aside-right">
            <img src={picture} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
