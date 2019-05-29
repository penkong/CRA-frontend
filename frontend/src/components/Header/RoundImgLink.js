/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const RoundImgLink = ({ src, alt }) => {
  return (
    <a className="db dtc-l v-mid mid-gray link grow w-100 w-25-l tc tl-l mv4 mb0-l" href="/" title="Logo">
      <img className = "dib w4 w5-l h4 h5-l br-100 mt2 mt3-l ml2 ml3-l"
      src={src}
      alt={alt}/>
    </a>
  );
}

export default RoundImgLink
