/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LinkNav from './NavLink';
import RoundImgLink from './RoundImgLink';

const Header = () => {
  return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <RoundImgLink src="http://tachyons.io/img/logo.jpg" alt="my logo"/>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l fw3 f4">
          <LinkNav text='Main'/>
          <LinkNav text='About'/>
          <LinkNav text='Contact'/>
        </div>
      </nav>
  )
}

export default Header
