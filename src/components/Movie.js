import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          year,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} className="movie__poster" />
        <div className="movie__data">
          <h3 className="movie__data__title">{title}</h3>
          <h5 className="movie__data__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="geners__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__data__summary">
            {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
