import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSearch} from '../Store/Actions';
import Films from './Films';

const SearchList = ({getSearch, searchResults, isFetching, searchUrl}) => {
  useEffect(() => {
    getSearch(searchUrl);
  }, [getSearch, searchUrl]);

  return (
    <div>
      {searchResults.map(film => <Films film={film} key={Math.random()} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    film: state.film,
    searchResults: state.searchResults,
    isFetching: state.isFetching,
    searchUrl: state.searchUrl
  };
};

export default connect(mapStateToProps, {getSearch})(SearchList);