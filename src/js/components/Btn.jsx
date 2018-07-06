import React from 'react'

const Btn = ({ children, label, className, color, large, circle, ...props }) => (
  <span
    className={`Btn ${className ? className : ""} ${large && "large"} ${circle && "circle"}`}
    style={color ? {background: color} : {}}
    {...props}
    >
    {children || label}
  </span>
)
Btn.defaultProps = {
  label: "button",
}

export default Btn
