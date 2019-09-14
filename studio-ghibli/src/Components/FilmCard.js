import React,  {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getFilm} from '../Store/Actions';

const FilmCard = (props) => {
  const id = props.match.params.id;
  const fetch = props.getFilm;
  const card = props.card;

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
  }, [fetch, id]);

  return (
    props.isFetching ? <Loader className='loader' type='BallTriangle' color='blue' height={300} width={300} /> :
      <div className='film-card'>
        <div className='card-info'>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>Director: {card.director}</p>
          <p>Producer: {card.producer}</p>
          <p>Release Date: {card.release_date}</p>
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    card: state.filmCard,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {getFilm})(FilmCard);