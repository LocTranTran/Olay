import React, { useState, useRef, useEffect } from 'react';
import Button from '../pages/Button';
import Login from '../components/Login';

const Sign = () => {
const [login, showLogin] = useState(false);
const loginRef = useRef(null);

const handleLoginClick = () => {
    showLogin(true);
};

const handleSignUpClick = () => {
    // Handle sign up button click here
};

const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
    showLogin(false);
    }
};

useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

return (
    <div style={{ display: 'flex', gap: '20px' }}>
    <Button icon="Đăng Nhập" onClick={handleLoginClick} />
    <div style={{position:'absolute',top:'21.5%',right:'18.5%'}}>

    {login && <div ref={loginRef}><Login /></div>}

    </div>
    <Button icon="Đăng Ký" onClick={handleLoginClick} />
    </div>
);
};

export default Sign;