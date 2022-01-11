import React from "react";
import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
