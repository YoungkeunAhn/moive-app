import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} className="movie__poster" />
      <div className="movie__data">
        <h3 className="movie__data__title">{title}</h3>
        <h5 className="movie__data__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre) => (
            <li className="geners__genre">{genre}</li>
          ))}
        </ul>
        <p className="movie__data__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
