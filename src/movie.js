import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title, poster}){
    return(
        <div className="posterimg">
            <MoviePoster poster={poster} title={title}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({title, poster}){
    return(
        <img src={poster} alt={title}/>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie