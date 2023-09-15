import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Run from "./pages/Run";
import Carousels from "./components/Carousel";
import './app.scss'
const App = () => {
  return (
    <div className="app">
      <Run 
      text="Olay - Mang lại cho bạn làn da tươi trẻ và rạng rỡ. Khám phá các sản phẩm chăm sóc da chất lượng cao của chúng tôi, chứa thành phần tự nhiên và công nghệ tiên tiến. Hãy trải nghiệm sự thay đổi đáng kinh ngạc trên làn da của bạn với Olay!" 
      width="90vw"
/>
      <Header/>
      <Carousels/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;