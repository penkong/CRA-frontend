import React from 'react'
import { NavLink } from 'react-router-dom';
const LinkNav = props => {
  return (
    <NavLink className="link dim dark-gray f3 f2-l dib mh2 mh4-m mh4-l"
      to="/"
      activeClassName="is-active" exact={true}>{props.text}
    </NavLink>
  )
}

export default LinkNav
