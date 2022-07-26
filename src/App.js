import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Aside from "./components/Aside";
import logo from "./assets/logo.png";
import Panier from "./components/Panier";

function App() {
  // states
  // recup data
  const [data, setData] = useState("");
  // eviter de boucler au mmt de la recup data
  const [isLoading, setIsLoading] = useState(true);
  // state pour le panier
  const [basketArray, setBasketArray] = useState([]);

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

          <main className="container">
            <div className="section-group-left">
              <Sections
                categoryArray={data.categories}
                basketArray={basketArray}
                setBasketArray={setBasketArray}
              />
            </div>
            <div className="section-panier-right">
              <Panier
                basketArray={basketArray}
                setBasketArray={setBasketArray}
              />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
