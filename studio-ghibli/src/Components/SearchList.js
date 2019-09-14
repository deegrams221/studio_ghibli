import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSearch} from '../Store/Actions';
import Loader from 'react-loader-spinner';
import Films from './Films';

const SearchList = ({getSearch, searchResults, isFetching, searchUrl}) => {
  useEffect(() => {
    getSearch(searchUrl);
  }, [getSearch, searchUrl]);

  return (
    <div>
      {isFetching ? <Loader className='loader' type='BallTriangle' color='blue' height={300} width={300} /> :
        <div className='film-container'>
          {searchResults.map(film => <Films film={film} key={Math.random()} />)}
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    isFetching: state.isFetching,
    searchUrl: state.searchUrl
  };
};

export default connect(mapStateToProps, {getSearch})(SearchList);