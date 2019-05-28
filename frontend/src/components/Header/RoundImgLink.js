/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const RoundImgLink = ({ src, alt }) => {
  return (
    <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mv4 mb0-l" href="#" title="Home">
      < img className = "dib w4 h4 br-100 mt2 ml2"
      src={src}
      alt={alt}/>
    </a>
  );
}

export default RoundImgLink
