import React from 'react';
import '../styles/Run.scss';

const Run = (props) => {
return (
    <div>
    <marquee style={{width:props.width,backgroundColor:props.bg,color:props.color}}behavior="scroll" direction="left" scrollamount="10" className="run-marquee">
    {props.text} 
    </marquee>
    </div>
);
};

export default Run;