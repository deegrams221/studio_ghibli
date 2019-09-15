import React,  {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFilm} from '../Store/Actions';

const FilmCard = ({getFilm, films, isFetching, id}) => {
  useEffect(() => {
    getFilm(`https://ghibliapi.herokuapp.com/films/<id>`);
  }, [getFilm, id]);

  if(isFetching) {
    return <h2>Here comes your film!</h2>
  }

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
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {getFilm})(FilmCard);