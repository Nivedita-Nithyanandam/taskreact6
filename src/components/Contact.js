// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="portfolio-section">
      <h2>About Me</h2>
      <h3>Hey guys, </h3>
      <p>Hello, I'm Nivedita, currently a third-year student pursuing a B.Tech in Biotechnology at Vellore Institute of Technology. While my academic path is firmly rooted in the world of science, I've discovered a passionate interest in web development. This fascination with IT has led me to explore a different avenue, setting my sights on a career in the ever-evolving field of information technology. My journey has been an exciting blend of science and technology, making me a unique combination of knowledge and skills, poised to make a meaningful impact in both domains."</p>
    <h1 class="hey" align="center" >EDUCATION</h1>
    <div class="flowchart" align="center">
      <div class="node" id="high-school">
        <h2 class="me">Secondary School</h2>
        <p class="me">2006 - 2019</p>
        <p class="me">B.M.D jain school | vellore</p>
      </div>
      <div id="line1"></div>
      <div class="arrow5"></div>
      <div class="node" id="Senior Secondary">
        <h2 class="me">Senior Secondary School</h2>
        <p class="me">2019 - 2021</p>
        <p class="me">Shrishti Vidyasharam| Vellore</p>
      </div>
      <div id="line1"></div>
      <div class="arrow6"></div>
      <div class="node" id="undergraduate-degree">
        <h2 class="me">Undergraduate Degree</h2>
        <p class="me">2021 - Present</p>
        <p class="me">Vellore Institute of Technology | Vellore</p>
      </div>
    </div>
    </section>
  );
}

export default About;