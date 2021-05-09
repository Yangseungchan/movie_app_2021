import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movies__movie">
      <div className="movie__poster-wrapper">
        <img
          className="movie__poster"
          src={poster}
          alt={title}
          title={title}
        ></img>
      </div>
      <div className="movie__data">
        <div className="movie__data__wrapper">
          <h3 className="movie__title">{title}</h3>
          <div className="year-genres-wrapper">
            <span className="movie__year">{year}</span>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}

// Movie의 prop들에 대한 type checking
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
