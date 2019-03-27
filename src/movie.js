import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title, poster, overview, rating}){
    return(
        <div className="posterimg">
            <img src={poster} alt={title}/>
            <div>
                <h1>{title}</h1>
                <span>{rating}</span>
                <p>{overview}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}


export default Movie