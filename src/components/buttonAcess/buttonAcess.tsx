import React from 'react';
import "./buttonAcess .css"

interface buttonAcess {
  value?: any,
  id: string,
  className: string,
  href: string,
  label: string,
  target:string;
}



function ButtonAcess({id , className, href, label} : buttonAcess)  {
  return (
    <a href={href}
     id={id}
     target="_blank"
     className={className}
     >{label}</a>
  )
}



export default ButtonAcess