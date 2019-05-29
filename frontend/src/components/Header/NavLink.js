import React from 'react'
import { NavLink } from 'react-router-dom';
const LinkNav = props => {
  return (
    < NavLink className = {
      `link dim dark-gray f3 f3-m f2-l dib mr2 ph2 ph4-l ${props.br}-l b--black-10`
    }
      to="/"
      activeClassName="is-active" exact={true}>{props.text}
    </NavLink>
  )
}

export default LinkNav
