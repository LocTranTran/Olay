import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousels() {
return (
    <div style={{ width: '90vw', margin: '0 auto', }}>
    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div style={{ display: 'flex' }}>
        <img src="https://via.placeholder.com/150" alt="Hình 1" style={{ flex: '0 0 auto', maxWidth: '20%', maxHeight: '100%', objectFit: 'contain' }} />
        <img src="https://via.placeholder.com/150" alt="Hình 2" style={{ flex: '0 0 auto', maxWidth: '20%', maxHeight: '100%', objectFit: 'contain' }} />
        <img src="https://via.placeholder.com/150" alt="Hình 3" style={{ flex: '0 0 auto', maxWidth: '20%', maxHeight: '100%', objectFit: 'contain' }} />
        <img src="https://via.placeholder.com/150" alt="Hình 3" style={{ flex: '0 0 auto', maxWidth: '20%', maxHeight: '100%', objectFit: 'contain' }} />
        <img src="https://via.placeholder.com/150" alt="Hình 3" style={{ flex: '0 0 auto', maxWidth: '20%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>
        
    </Carousel>
    </div>
);
}

export default Carousels;