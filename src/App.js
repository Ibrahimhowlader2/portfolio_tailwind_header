import React from 'react';
import About from "./components/About";
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
