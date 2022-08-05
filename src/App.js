import React from 'react';
import Header from './Header';
import About from './About';
import Project from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div classname='container'>
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
