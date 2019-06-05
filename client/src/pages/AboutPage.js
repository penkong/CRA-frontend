/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';
import me from '../assets/me.jpg';

const AboutPage = () => {

  return (
    <div>
    <div className="cf bg-light-gray br3 ph4-m ph5-l pa2">
        {/* <div class="w-80 center fl-l w-50-l ph2">
          <img class="w-100 center pv2 br-100 b--black-05" src={me}/>
        </div> */}
        <div class="w-70 center fr-l w-40-l ph2 b--black-10">
          <img class="w-100 center br-100 pv2 grow db no-underline black b--black--5" src={me}/>
        </div>
        <div class="w-70 center fr-l w-40-l ph2 b--black-10">
          <h3>My Story:</h3>
          
        </div>
    </div>
        
    </div>
  )
}

export default AboutPage

// <h1>My Work</h1>
    // <p>Checkout the stuff I've done:</p>
    // <Link to="/portfolio/1">Item One</Link>
    // <Link to="/portfolio/2">Item Two</Link>