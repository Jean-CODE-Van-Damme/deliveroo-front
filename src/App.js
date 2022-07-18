import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Aside from "./components/Aside";

function App() {
  // console.log(1);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
          <Header name="deliveroo" />
          <Aside
            title={data.restaurant.name}
            text={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          {/* on passe le tableau categories en props */}
          <Sections categoryArray={data.categories} />
        </div>
      )}
    </div>
  );
}

export default App;
