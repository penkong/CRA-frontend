/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';
import me from '../assets/me.jpg';

const AboutPage = () => {

  return (
    <div>
    <div className="cf bg-light-gray cover ph4-m ph5-l pa2">
        {/* <div class="w-80 center fl-l w-50-l ph2">
          <img class="w-100 center pv2 br-100 b--black-05" src={me}/>
        </div> */}
        <div class="w-70 center fr-l w-40-l ph2">
          <img class="w-100 center br-100 pv2 grow db no-underline black" src={me}/>
        </div>
    </div>
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
            <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
            <h1 class="f3 mb2">Mimi W.</h1>
            <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
          </div>
        </article>
    </div>
  )
}

export default AboutPage

// <h1>My Work</h1>
    // <p>Checkout the stuff I've done:</p>
    // <Link to="/portfolio/1">Item One</Link>
    // <Link to="/portfolio/2">Item Two</Link>