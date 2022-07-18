const Section = ({ title = "", mealsArray = [] }) => {
  return (
    <section>
      <h3>{title}</h3>

      <div className="big-div">
        {mealsArray.map((element, index) => {
          return (
            // si meals est different de undifined ( ou si meals est different d un tableau vide) && retourne la div card)

            <div className="card" key={element.id}>
              <div className={element.picture ? "left-card" : "left-card-bis"}>
                <h4>{element.title}</h4>
                <div className="left-card-text">
                  {element.description && <p>{element.description}</p>}
                </div>

                <div className="left-card-price">
                  <span className="price"> {element.price}</span>
                  {element.popular && (
                    <span className="populaire"> ★ Populaire </span>
                  )}
                </div>
              </div>
              {element.picture && (
                <div className="img-card">
                  <img src={element.picture} alt={element.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
