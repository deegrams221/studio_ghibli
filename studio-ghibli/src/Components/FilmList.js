import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFilm} from '../Store/Actions'
import Loader from 'react-loader-spinner'
import Films from './Films';

const FilmList = ({getFilm, films, url, isFetching}) => {
  useEffect(() => {
    getFilm(url);
  }, [getFilm, url])

  return (
    <div>
      {isFetching ? <Loader className='loader' type="BallTriangle" color="blue" height={300} width={300} /> :
        <div className='film-container'>
          {films.map(film => <Films film={film} key={Math.random()} />)}
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    film: state.film,
    films: state.films,
    url: state.url,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {getFilm})(FilmList);