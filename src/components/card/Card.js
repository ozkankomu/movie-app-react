import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="row gap-2 justify-content-between">
      {data?.map((item) => {
        const {
          id,
          title,
          overview,
          poster_path,
          vote_average,
          backdrop_path,
        } = item;
        const image = `https://image.tmdb.org/t/p/w500${poster_path} `;
        return (
          <div key={id} className="card" style={{ width: "22rem" }}>
            <div className="cards">
              <img src={image} className="card-img-top" alt="image" />
              <div className="cardText">
                <p className="card-text">{overview}</p>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <h5 className="card-title">{title}</h5>
                <p className="vote">{vote_average}</p>
              </div>
              <a href="#" className="btn btn-secondary rounded-4">
                View Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
