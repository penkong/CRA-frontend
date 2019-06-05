import React from 'react'

const Button = ({color, text, children}) => {
  return (
    <div className="code pr1 dib">
      <a className={`f6 f4-l grow no-underline br4 ph3 pv2 mr1 mb2 dib white ${color}`} href="#0">{text || children}</a>
    </div>
  )
}

export default Button
