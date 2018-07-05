import React from 'react'

const Btn = ({ children, label, className, large, ...props }) => (
  <span className={`Btn ${className ? className : ""} ${large && "large"}`} {...props}>
    {children || label}
  </span>
)
Btn.defaultProps = {
  label: "button",
}

export default Btn
