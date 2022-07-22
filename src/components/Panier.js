const Panier = ({ basketArray = [], setBasketArray }) => {
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
        <h5>Valider mon panier</h5>
        {basketArray.map((element, index) => {
          console.log(
            "la clef quantity dans basket array pour chaque element",
            basketArray[index].quantity
          );
          console.log(basketArray);
          console.log(basketArray[index].quantity);

          return (
            //  je sais pas pourquoi mais ca marche

            <div key={index} className="big-choice">
              <span>
                <button
                  // on modifie le state basketArray et sa clef quantity,
                  // a l index voulu , pour decrementer cette quanttite
                  onClick={() => {
                    const copyBasketArray = [...basketArray];
                    copyBasketArray[index].quantity =
                      copyBasketArray[index].quantity - 1;
                    setBasketArray(copyBasketArray);
                  }}
                >
                  -
                </button>
              </span>

              <span>{element.quantity}</span>

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

              <span>{element.name}</span>
              <span>{element.price}</span>
            </div>
          );
        })}
        <div>
          <span>Sous-total</span>
          <span>{aroundUnderTotal}</span>
        </div>

        <div>
          <span>frais de livraison</span>
          <span>{taxes}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{arounTtotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Panier;
