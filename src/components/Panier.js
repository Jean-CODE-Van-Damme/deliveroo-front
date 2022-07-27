const Panier = ({ basketArray = [], setBasketArray }) => {
  // calcul du total, taxes, sous total, et des arrondis,
  let taxes = 2.5;
  let underTotal = 0;
  for (let i = 0; i < basketArray.length; i++) {
    underTotal = underTotal + basketArray[i].price * basketArray[i].quantity;
    console.log("sous-total", underTotal);
  }
  let total = underTotal + taxes;
  let aroundUnderTotal = underTotal.toFixed(2);
  let arounTtotal = total.toFixed(2);

  return (
    <div className="container">
      <div className="panier">
        <button className={basketArray.length === 0 ? "not-valid" : "valid"}>
          Valider mon panier
        </button>
        {/* on map sur le basketArray qui est notre state tableau  */}
        {basketArray.map((element, index) => {
          console.log(
            "la clef quantity dans basket array pour chaque element",
            basketArray[index].quantity
          );
          console.log(basketArray);
          console.log(basketArray[index].quantity);

          // {element.quantity > 0 ? }

          return (
            //  je sais pas pourquoi mais ca marche

            <div key={index} className="choice">
              <div className="left-part">
                <span>
                  <button
                    // on modifie le state basketArray et sa clef quantity,
                    // a l index voulu , pour decrementer cette quanttite
                    onClick={() => {
                      const copyBasketArray = [...basketArray];
                      copyBasketArray[index].quantity =
                        copyBasketArray[index].quantity - 1;

                      element.quantity < 1 && copyBasketArray.splice(index, 1);

                      // copyBasketArray[index].price =
                      //   copyBasketArray[index].quantity *
                      //   copyBasketArray[index].price;
                      // setBasketArray(copyBasketArray);

                      // si la quantite de l element que l on map (basketArray)
                      // est inf a 1 alors on supp l element a cet index.

                      setBasketArray(copyBasketArray);
                    }}
                  >
                    -
                  </button>
                </span>

                <span className="quantity">{element.quantity}</span>

                <span>
                  <button
                    // on modifie le state basketArray et sa clef quantity,
                    // a l index voulu , pour incrementer cette quanttite
                    onClick={() => {
                      const copyBasketArray = [...basketArray];
                      copyBasketArray[index].quantity =
                        copyBasketArray[index].quantity + 1;
                      setBasketArray(copyBasketArray);
                    }}
                  >
                    +
                  </button>
                </span>
              </div>
              <div className="right-part">
                <span>{element.name}</span>
                <span className="price">
                  {(element.price * element.quantity).toFixed(2)} <p>$</p>
                </span>
              </div>
            </div>
          );
        })}

        {basketArray.length > 0 ? (
          <>
            <div className="sous-total-ans-fees">
              <div className="sous-total">
                <span>Sous-total</span>
                <span>{aroundUnderTotal} $</span>
              </div>
              <div className="fees">
                <span>frais de livraison </span>
                <span>{taxes} $</span>
              </div>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{arounTtotal} $</span>
            </div>
          </>
        ) : (
          <p className="empty">Votre Panier est vide</p>
        )}
      </div>
    </div>
  );
};

export default Panier;
