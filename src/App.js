import axios from "axios";
import React, { useEffect, useState } from "react";

// components
import Reviews from "./Components/Reviews";

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
        alert(error.message);
      });
  }, []);

  return (
    <div className="App">
      <Reviews reviews={reviews} />
    </div>
  );
}

export default App;
