
import React from 'react'
import Button from '../components/Button';

const MainPage = () => {
  return (
  <article data-name="article-full-bleed-background">
    <div className="cf" style={{}}>
      <div className="fl w-50-l pa3 pa4-ns bg-white black-70 measure-narrow measure-wide-l f3 times br-10">
        <header className="bb b--black-10 pv2">
        <h3 className="f2 fw6 pa2 mt0 mb1 tc tracked lh-title avenir">Mazdak Nazemi</h3>
        </header>
        <section className="code pt4 pb3">
          <p className=" lh-copy measure f4 mt0">
          Hi,I am <strong className="inlinemv2">Mazdak</strong>  self-thought JavaScript web developer, designer, moving toward fullstack and in love with machine learning.<br/> enjoy to help you.
          <br/>
          </p>
          <h1 className="f5 fw6 ttu tracked mv3">Skills Till Now:</h1>
          <Button text='CorelDraw' color='bg-black'/>
          <Button text='HTML5' color='bg-red'/>
          <Button text='CSS3' color='bg-orange'/>
          <Button text='SASS' color='bg-green'/>
          <Button text='JavaScript' color='bg-navy'/>
          <Button text='Webpack' color='bg-light-blue'/>
          <Button text='ReactJs' color='bg-navy'/>
          <Button text='Redux' color='bg-navy'/>
          <Button text='MongoDB' color='bg-dark-green'/>
          <Button text='Nodejs' color='bg-dark-blue'/>
          <Button text='Express' color='bg-dark-blue'/>
          <Button text='OOP & FP' color='bg-gold'/>
        </section>
      </div>
    </div>
  </article>
  )
}

export default MainPage
