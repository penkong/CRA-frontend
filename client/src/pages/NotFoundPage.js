import React from 'react';
import { NavLink } from 'react-router-dom';

import notFound from '../assets/404.png';
const NotFoundPage = () => (
  <div>
    <img className="center w-80 w-40-l db mt0 pa5 pt0-l db" src={notFound} alt="not found"/>
    <NavLink to="/">Back</NavLink>
  </div>
);

export default NotFoundPage;
