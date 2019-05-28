/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="db dt-l w-90 border-box pa3 ph5-l">
        <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home"><h1 className="tl pt2 mt1 ml2">Mazdak Nazemi</h1></a>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l fw3">
          < NavLink class = "link dim dark-gray f6 f5-l dib mr3 mr4-l"
            to="/"
            activeClassName="is-active" exact={true}>Main
          </NavLink>
          < NavLink class = "link dim dark-gray f6 f5-l dib mr3 mr4-l"
            to="/portfolio" 
            activeClassName="is-active" exact={true}>About
          </NavLink>
          <NavLink class="link dim dark-gray f6 f5-l dib mr3 mr4-l"
            to="/contact" 
            activeClassName="is-active">Contact
          </NavLink>
        </div>
      </nav>
    </div>
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