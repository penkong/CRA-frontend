/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LinkNav from './LinkNav';
import RoundImgLink from './RoundImgLink';

const Header = () => {
  return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <RoundImgLink alt="my logo"/>
        <div className="athelas db dtc-l v-mid w-100 w-50-l tc tr-l fw3 f4">
          <LinkNav text='Main' br='br' to='/'/>
          <LinkNav text='About' br='br' to='/about'/>
          <LinkNav text='Contact' to='/contact'/>
        </div>
      </nav>
  )
}

export default Header;
// "http://tachyons.io/img/logo.jpg"