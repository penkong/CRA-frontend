import React from 'react'
import LinkNav from '../Header/LinkNav';

const InfoSection = () => {
  return (
    <p className=" lh-copy measure f4 mt0">
      Hi,I am <strong className="inlinemv2 hover-green"><LinkNav text='Mazdak' to='/about'/></strong>
      JavaScript web developer and enjoy to <span className="green">help</span> you.
      <br/>
    </p>
  )
}

export default InfoSection;
