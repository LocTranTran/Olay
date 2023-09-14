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
      <Run/>
      <Header/>
      <Carousels/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;