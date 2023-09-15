import React from 'react';
import Run from '../pages/Run';
import Button from "../pages/Button"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backgroundImage from '../assets/img/super-serum-available-desktop.jpg';
function Carousels() {
  return (
    <>
    <div style ={{
        display:'flex',
        width:'80vw',height:'650px',
        backgroundSize:'cover', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: 'no-repeat',
        }}>
            <div 
            style={{
                width:'25%', height:'30vh', 
                position:'relative',
                top:'20%',
                left:'10%'
                }} >
                <h1 
                style={{
                    display:'flex',
                    width:'100px',
                    height:"50px",
                    alignItems:"center",
                    color:'black',
                    fontFamily:'sans-serif',
                    backgroundColor:'white',
                    borderRadius:'5px'}}
                >MỚI
                    
                <i class="fa-solid fa-bars-staggered" style={{color: "#ff0000"}}></i>
                </h1>
                <h1
                style={{
                    color:'gray'
                }}>
                    5 Serum Cao Cấp Lợi Ích Trong 1
                </h1>
                <p
                style={{
                    fontSize:'1.3rem'
                }}>
                    Biến đổi làn da của bạn chỉ trong 4 tuần  
                </p>
                    <Button Style={{fontFamily:'Roboto, sans-serif'}} icon ="MUA NGAY"/>
            </div>
    </div>
    <Run width='80vw' bg='black' color ='white' text='Chào mừng bạn đến với OLAY .Chúng tôi sẽ mang đến cho bạn trải nghiệm tốt nhất .Mua hàng ngay hôm nay để được giảm giá 25%'/>
    </>
  );
}

export default Carousels;