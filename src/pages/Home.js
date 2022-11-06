import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/card/Card.js";
import Subscribe from "../components/subscribe/Subscribe.js";

const Home = () => {
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const [data, setData] = useState("");

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=60fc433eced7ca1505af1e2a65704e8a`;
    const res = await fetch(url);
    const datas = await res.json();
    setData(datas.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="root">
      <section id="showcase">
        <h1>Welcome to Movie App</h1>
        <div className="input-group mb-3 w-50 m-auto ">
          <input
            type="text"
            className="form-control"
            placeholder="Search Movie Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary rounded "
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="containerr">
          <Card data={data} />
        </div>
      </section>
      <Subscribe />
    </div>
  );
};

export default Home;
