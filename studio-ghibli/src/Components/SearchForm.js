import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setSearch} from '../Store/Actions';
import SearchList from './SearchList';

const SearchForm = (props) => {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSerch(`https://ghibliapi.herokuapp.com/films?${options}=${input}`);
  };

  const handleChange = (e) => {
    e.target.title === 'input' ? setInput(e.target.value) : setOptions(e.target.value);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} className='search-form'>
        <select title='options' onChange={handleSubmit}>
          <option>Search for a Film</option>
          <option value='title'>Title</option>
          <option value='director'>Director</option>
          <option value='producer'>Producer</option>
          <option value='release_date'>Release Date</option>
        </select>
        <input name='input' placeholder='Search' onClick={handleChange} />
        <button type='submit'>Search</button>
      </form>
      <SearchList />
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP:', state);
  return {
    searchForm: state.searchForm,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {setSearch})(SearchForm);