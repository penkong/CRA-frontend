/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mv4 mb0-l" href="#" title="Home">
          < img className = "dib w4 h4 br-100 mt2 ml2"
          src="http://tachyons.io/img/logo.jpg"
          alt="Site Name"/>
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l fw3 f4">
          <NavLink className="link dim dark-gray f2-l dib mh2 mh4-m mh4-l"
            to="/"
            activeClassName="is-active" exact={true}>Main
          </NavLink>
          <NavLink className="link dim dark-gray f2-l dib mh2 mh4-m mh4-l"
            to="/portfolio" 
            activeClassName="is-active" exact={true}>About
          </NavLink>
          <NavLink className="link dim dark-gray f2-l dib mh2 mh4-m mh4-l"
            to="/contact" 
            activeClassName="is-active">Contact
          </NavLink>
        </div>
      </nav>
  )
}

export default Header


{
  /* <header>

        <h1 className="tl pt2 mt1 ml2">Mazdak Nazemi</h1>
        <div className="tr">
          
          
          
        </div>
      </div>
      </div>
    </header> */
}