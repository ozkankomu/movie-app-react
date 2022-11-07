import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Detail = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const [videoss, setVideoss] = useState("");
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const { id } = useParams();

  const getDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`;
    const response = await fetch(url);
    const details = await response.json();
    setDetail(details);
    console.log(detail);
    console.log(details);
  };

  const getVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APP_KEY}`;
    const resp = await fetch(url);
    const videos = await resp.json();
    setVideoss(videos.results[1].key);
    console.log(videos.results[1].key);
    console.log(videoss);
  };

  useEffect(() => {
    getDetails();
    getVideo();
  }, []);

  // const image = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  return (
    <div className="container p-0 bg-dark text-light d-flex align-items-center flex-column mt-3  mb-5">
      <div>
        <figure className="figure p-3">
          <img
            src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
            className="figure-img img-fluid rounded"
            alt="figure-img"
          />
          <figcaption className="figure-caption"></figcaption>
        </figure>
      </div>
      <div className=" bg-dark text-light genres">
        {detail.genres?.map((item, i) => {
          return (
            <p key={i} className="d-inline">
              {item?.name}
            </p>
          );
        })}
      </div>
      {/* details */}
      <hr />

      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          width="940"
          height="538"
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${videoss}?autoplay=1&mute=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <hr />
      <div className=" detail-context">
        <div className="card  p-3 bg-dark">
          <div className="row g-0">
            <div className="col-5 col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w1280${detail.poster_path}`}
                className="img-fluid w-100"
                alt="card-horizontal-image"
              />
            </div>
            <div className=" bg-dark text-light col-7 col-sm-8">
              <div className="card-body detail-body">
                <h1 className="card-title">{detail.title}</h1>
                <p className="card-text fs-4">{detail.tagline}</p>
                <p className="card-text">{detail.overview}</p>
                <p className="card-text">
                  <span className="fs-5">Language : </span>{" "}
                  {detail.original_language}
                </p>
                <p className="card-text">
                  <span className="fs-5">Original Title : </span>{" "}
                  {detail.original_title}
                </p>
                <p className="card-text">
                  <span className="fs-5">Vote : </span>
                  {detail.vote_count}
                </p>
                <p className="card-text">
                  <span className="fs-5">Average : </span>
                  {detail.vote_average}
                </p>
                <p className="card-text">
                  <span className="fs-5">Runtime : </span>
                  {detail.runtime} M.
                </p>
                <p className="card-text">
                  <span className="fs-5">Relase Date : </span>
                  {detail.release_date}
                </p>
                <p className="card-text">
                  <span className="fs-5">Home Page : </span>
                  <a target="_blank" href={detail.homepage}>
                    {detail.homepage}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary m-2 fs-5 w-50"
      >
        Go Back
      </button>
    </div>
  );
};

export default Detail;
