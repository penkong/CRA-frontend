import React from 'react'

const ContainerW50 = props => {
  return (
    <div className={`${props.float} w-50-l pa3 pa4-ns bg-white black-70 measure-narrow measure-wide-l f3 times br-10`}>
      <header className="bb b--black-10 pv2">
      <h3 className="f2 fw6 pa2 mt0 mb1 tc tracked lh-title code">{props.head}</h3>
      </header>
      <section className="code pt4 pb3">
        {props.children}
      </section>
    </div>
  )
}

export default ContainerW50
