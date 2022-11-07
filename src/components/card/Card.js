import React from "react";
import "./Card.css";
import images from "../../assets/img/images.png";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

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
        const image2 = `https://image.tmdb.org/t/p/w500${backdrop_path} `;
        return (
          <div
            key={id}
            className="card"
            style={{ width: "22rem", background: "#35424a" }}
            type="button"
            onClick={() => navigate(`${id}`)}
          >
            <div className="cards">
              <img
                src={image || image2 || images}
                className="card-img-top"
                alt="image"
              />
              <div className="cardText">
                <p className="card-text">{overview}</p>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <h5 className="card-title">{title}</h5>
                <p className="vote">{vote_average}</p>
              </div>
              <button
                className="btn btn-secondary rounded-4"
                onClick={() => navigate(`${id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
