import React from "react";
import "../styles/Login.scss";
function Login() {
return (
    <>
<div className="wrapper">
<div className="card-switch">
    <label className="switch">
    <input className="toggle" type="checkbox" />
    <span className="slider"></span>
    <span className="card-side"></span>
    <div className="flip-card__inner">
        <div className="flip-card__front">
        <div className="title">Đăng Nhập</div>
        <form action="" className="flip-card__form">
            <input type="email" placeholder="Email" name="email" className="flip-card__input" />
            <input type="password" placeholder="Password" name="password" className="flip-card__input" />
            <button onClick={(event) =>{ event.preventDefault();}} className="flip-card__btn">Đăng Nhập</button>
        </form>
        </div>
        <div className="flip-card__back">
        <div className="title">Đăng Ký </div>
        <form action="" className="flip-card__form">
            <input type="name" placeholder="Name" className="flip-card__input" />
            <input type="email" placeholder="Email" name="email" className="flip-card__input" />
            <input type="password" placeholder="Password" name="password" className="flip-card__input" />
            <button onClick={(event) =>{ event.preventDefault();}}className="flip-card__btn">Hoàn Thành!</button>
        </form>
        </div>
    </div>
    </label>
</div>
</div>    </>
)
}

export default Login;
