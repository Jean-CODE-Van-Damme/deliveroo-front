import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Aside from "./components/Aside";
import logo from "./assets/logo.png";
import Panier from "./components/Panier";

function App() {
  // console.log(1);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [basketArray, setBasketArray] = useState([]);
  const [numberMeal, setNumberMeal] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-olivier.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // console.log(2);
    fetchData();
  }, []);

  // const tab = [];
  // tab.push(data);
  // console.log("tab>>>>", tab);

  return (
    <div className="App">
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div>
          <Header name={logo} />
          <Aside
            title={data.restaurant.name}
            text={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          {/* on passe le tableau categories en props */}

          <Sections
            categoryArray={data.categories}
            basketArray={basketArray}
            setBasketArray={setBasketArray}
            numberMeal={numberMeal}
            setNumberMeal={setNumberMeal}
          />

          <Panier
            basketArray={basketArray}
            setBasketArray={setBasketArray}
            numberMeal={numberMeal}
            setNumberMeal={setNumberMeal}
          />
        </div>
      )}
    </div>
  );
}

export default App;
