import React from 'react'

const SocialIcon = props => {
  return (
    <a className="link hover-silver near-black dib h2 w2 mr3" href="https://twitter.com/mrmrs_" title="Twitter">
      {props.children}
    </a> 
  )
}

export default SocialIcon;