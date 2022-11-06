import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/card/Card.js";
import Subscribe from "../components/subscribe/Subscribe.js";

const Home = () => {
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    let url;
    const url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`;
    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${search}`;
    search ? (url = url2) : (url = url1);
    const res = await fetch(url);
    const datas = await res.json();
    setData(datas.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="root">
      <section id="showcase" className="p-1">
        <form
          className="input-group mb-3 w-50 m-auto "
          onSubmit={(e) => (e.preventDefault(), fetchData())}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search Movie Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary fs-5 rounded "
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </form>
        <div className="containerr">
          <Card data={data} />
        </div>
      </section>
      <Subscribe />
    </div>
  );
};

export default Home;
