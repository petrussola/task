import axios from "axios";
import React, { useEffect, useState } from "react";

const endPoint = process.env.REACT_APP_ENDPOINT;

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        const data = res.data.data;
        const shortData = [];
        for (let i = 0; i < 11; i++) {
          shortData.push(data[i]);
        }
        setReviews(shortData);
      })
      .catch((error) => {
        debugger;
      });
  }, []);
  return <div className="App">hello</div>;
}

export default App;
