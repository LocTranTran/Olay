import React from 'react'
import '../styles/Button.scss'
const Button = (props) => {
return (
    <>
    <button className="animated-button">{props.icon}</button>
    </>
    )
}

export default Button