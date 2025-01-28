import React from 'react';
import CatGif from '../assets/cat-laptop.gif'; // Ensure this path matches your project structure
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>

      <div className="content">
        {/* Cat GIF working on a laptop */}
        <img src={CatGif} alt="Cat working on laptop" className="cat-gif" />
        
        <div className="info">
          <p>
            Hi, I'm <strong>Harshada</strong>! With <strong>9 lives</strong> and an <strong>endless passion for data</strong>,
            I'm on a mission to explore insights, solve challenges, and create meaningful solutions.
          </p>

          <p>
            Currently, I'm pursuing my <strong>B.Tech in Artificial Intelligence and Data Science</strong>
            at the <strong>KJ Somaiya Institute of Technology</strong>.
          </p>

          <p>
            My goal is to grow as a <strong>Data Analyst</strong>, <strong>Data Engineer</strong>, or <strong>ML Engineer</strong>.
          </p>

          <p>
            I believe data holds stories, and I'm here to tell them <strong>clearly, creatively,</strong> and with a touch of <strong>cat-like curiosity</strong>! 🐱✨
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
