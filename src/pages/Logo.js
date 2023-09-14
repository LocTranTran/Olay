import React from 'react';
import '../styles/Logo.scss';
const Logos = (props) => {
return (
    <div className='logo'>
        <h1 style={{fontSize:props.size}}>O L A Y</h1>
    </div>
);
};

export default Logos;