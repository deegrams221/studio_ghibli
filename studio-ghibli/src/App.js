import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
// import components
import FilmList from './Components/FilmList';
import FilmCard from './Components/FilmCard';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/films' component={FilmList} />
      <Route path='/films/:id' component={FilmCard} />
      <Route path='/search' component={SearchForm} />
    </div>
  );
}

export default App;
