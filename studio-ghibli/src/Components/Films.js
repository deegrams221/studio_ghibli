import React from 'react';
import {NavLink} from 'react-router-dom';

const Films = (props) => {
  return (
    <div className='film-card'>
      <NavLink to={`/films/${props.film.id}`}><h3>{props.film.title}</h3></NavLink>
      <img src={} alt={props.film.title} />
    </div>
  );
};

export default Films;