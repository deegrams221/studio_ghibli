import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getOneFilm} from '../Store/Actions';

const FilmCard = ({getOneFilm, films, id}) => {
  useEffect(() => {
    getOneFilm(`https://ghibliapi.herokuapp.com/films`);
  }, [getOneFilm, id]);

  return (
    <div className='film-card'>
      <div className='card-info'>
        <h2>{films.title}</h2>
        <p>{films.description}</p>
        <p>Director: {films.director}</p>
        <p>Producer: {films.producer}</p>
        <p>Release Date: {films.release_date}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    films: state.films,
  };
};

export default connect(mapStateToProps, {getOneFilm})(FilmCard);