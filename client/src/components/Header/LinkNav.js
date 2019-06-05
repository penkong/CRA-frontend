import React from 'react'
import { NavLink } from 'react-router-dom';
const LinkNav = props => {
  return (
    < NavLink className = {
      `link navy hover-green f3 f3-m f2-l dib mr2 ph2 ph3-l ${props.br}-l b--black-10`
    }
      to={props.to}
      activeClassName="is-active" exact={true}>{props.text}
    </NavLink>
  )
}

export default LinkNav
