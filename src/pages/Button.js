import React from 'react'
import '../styles/Button.scss'
const Button = ({icon , onClick}) => {
return (
    <>
    <button onClick ={onClick} className="animated-button">{icon}</button>
    </>
    )
}

export default Button