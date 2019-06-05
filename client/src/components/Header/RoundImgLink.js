/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import mlgo from '../../assets/mlgo.png';
const RoundImgLink = ({ alt }) => {
  return (
    <a className="db dtc-l v-mid mid-gray link grow w-100 w-25-l br--100 tc tl-l mv4 mb0-l" href="/" title="Logo">
      <img src={mlgo} className={`dib w4 w5-l h4 h5-l mt2 mt3-l ml2 ml3-l`}
      alt={alt}/>
    </a>
  );
}

export default RoundImgLink
