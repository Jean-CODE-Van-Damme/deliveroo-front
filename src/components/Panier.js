const Panier = ({
  basketArray = [],
  setBasketArray,
  numberMeal,
  setNumberMeal,
}) => {
  return (
    <div className="container">
      <div className="panier">
        <h5>Valider mon panier</h5>

        {basketArray.map((element, index) => {
          console.log(" BA>>>>", basketArray);
          return (
            //  je sais pas pourquoi mais ca marche

            <div key={index} className="big-choice">
              <span>
                <button
                  onClick={() => {
                    setNumberMeal();
                  }}
                >
                  -
                </button>
              </span>

              <span>{element.quantity}</span>

              <span>
                <button
                  onClick={() => {
                    setNumberMeal();
                  }}
                >
                  +
                </button>
              </span>

              <span>{element.name}</span>
              <span>{element.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Panier;
