const Section = ({
  title = "",
  mealsArray = [],
  basketArray = [],
  setBasketArray,
}) => {
  return (
    <section>
      <h3>{title}</h3>

      <div className="big-div">
        {/* on map sur mealsarray */}
        {/* et on retourne les elements souhaites sous condition  */}
        {mealsArray.map((element, index) => {
          return (
            <div
              className="card"
              key={element.id}
              // au click sur la card on push un obj dans le state basketArray
              onClick={() => {
                const copyArray = [...basketArray];
                const obj = {
                  id: element.id,
                  name: element.title,
                  price: element.price,
                  quantity: 1,
                };
                // on ne push l obj ds le state que si un objet qui n a pas la meme id n y est pas deja
                let isHere = false;
                for (let i = 0; i < copyArray.length; i++) {
                  if (obj.id === copyArray[i].id) {
                    isHere = true;
                    copyArray[i].quantity = copyArray[i].quantity + 1;
                  }
                }

                {
                  isHere === false && copyArray.push(obj);
                }

                setBasketArray(copyArray);

                // si on clique sur une card cela augmente la quantite du state correspondant.
                // const copyBasketArray = [...basketArray];
                // for (let i = 0; i, copyBasketArray.length; i++) {
                //   copyBasketArray[i].quantity = copyBasketArray[i].quantity + 1;
                //   setBasketArray(copyBasketArray);
                // }
              }}
            >
              {/* si il y a une photo on change de style css  */}
              <div className={element.picture ? "left-card" : "left-card-bis"}>
                {/* on retoune un titre  */}
                <h4>{element.title}</h4>
                <div className="left-card-text">
                  {/* si il y a une descritpion on la retourne */}
                  {element.description && <p>{element.description}</p>}
                </div>

                <div className="left-card-price">
                  {/* on retourne le prix  */}
                  <span className="price"> {element.price}</span>
                  {/* si la clef popular est true on retourne l etoile et "populaire" */}
                  {element.popular && (
                    <span className="populaire"> ★ Populaire </span>
                  )}
                </div>
              </div>
              {/* si il y a une photo on retourne la photo  */}
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
