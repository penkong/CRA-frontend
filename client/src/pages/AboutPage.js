/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import me from '../assets/me.jpg';


const AboutPage = () => {

  return (
    <div>
    <div className="cf bg-light-gray br3 ph4-m ph5-l pa2">
        {/* <div class="w-80 center fl-l w-50-l ph2">
          <img class="w-100 center pv2 br-100 b--black-05" src={me}/>
        </div> */}
        <div className="w-70 center fr-l w-40-l ph2 b--black-10">
          <img className="w-100 center br-100 pv2 grow db no-underline black b--black--5" alt="Sir Mazdak" src={me}/>
        </div>

        <div className="center w-90 w-100-m w-50-l fl-l mb6 mb0-l ph2 b--black-10 ">
          <div className = "helvetica w-100 lh-copy mt5-l ml5-l ph4-l pr0-ns pl1-ns">
            <h3 className="code f2 br-pill green no-underline grow pv2 ph3 dib">My Story:</h3>
            <p className="f4 mb4-ns tracked">
            It started in Tehran almost 30 years ago, days months ,years past 
            and found myself in shoes of a man that need his big leap.<br/> I was entrepreneur 
            in distribution & the marketing industry after while the sense of awareness came to me of creation, 
            contribution to help to the world, I chose the harder way and became a self taught developer . Now I ready to play 
            harder with more commitment. That's it for now and I am very happy to hear from you . 
            </p>
            <NavLink className ='fr link bg-green hover-bg-navy navy hover-green f4 f4-m f3-l dib br4 ph3 pv2 mr1 mt3 mb2 dib'
              to="/contact"
              activeClassName="is-active" exact={true}>Contact
            </NavLink>
          </div>
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