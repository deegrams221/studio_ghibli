import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return(
    <div className='home'>
      <h1>Welcome to the Studio Ghibli Film List</h1>
      <h2>Click <Link to='/films' className='film-link'>here</Link> to see the list!</h2>
    </div>
  );
};

export default Home;