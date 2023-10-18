// App.js
import React from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Course />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
