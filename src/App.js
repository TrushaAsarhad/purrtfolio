import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import FunRecommendation from './components/FunRecommendation';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <FunRecommendation/>
      <Footer />
    </div>
  );
}
//<Testimonials />

export default App;
