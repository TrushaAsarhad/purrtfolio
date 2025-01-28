import React from "react";
import "./ProjectsSection.css";
import catProjectGif from "../assets/cat-project.gif";

function ProjectsSection() {
  const projects = [
    {
      title: "Nutriguide Bot",
      description: "A bot that rates food products, suggests healthier alternatives, and explains nutritional insights.",
      link: "https://dietrecommend-bslnruesabqntxvzujghsj.streamlit.app/",
      comment: "Meow! This bot will keep your diet on track with purr-fect suggestions! 🐱🍎",
    },
    {
      title: "Ingredient Recognition & Recipe Recommender",
      description: "An ML-powered system that recognizes ingredients from images and recommends healthy recipes.",
      link: "https://workout-uzrnrn9ld6qwgr6n3gi8tt.streamlit.app/",
      comment: "Let’s whip up some pawsome recipes from what’s in your fridge! 🥘🐾",
    },
    {
      title: "Job Recommendation System",
      description: "Recommends jobs based on user preferences and skills using machine learning.",
      link: "https://jobrecommendationsystem-h7fzhuptldtnruyuatqdgj.streamlit.app/",
      comment: "Meow-tastic career matches await! You’re one step closer to success. 🧑‍💻😺",
    },
    {
      title: "Valentine's Week Game",
      description: "A fun game built to make Valentine’s week interactive and exciting!",
      link: "https://github.com/TrushaAsarhad/Valentines-week-game",
      comment: "Purrfectly romantic and fun! 🎮💖",
    },
    {
      title: "AI & ML Projects Repository",
      description: "Collection of various machine learning projects, including clustering, regression, and classification.",
      link: "https://github.com/TrushaAsarhad/AI-ML",
      subProjects: [
        "Deepfake Detection",
        "Diabetes Prediction",
        "Mine or Rock Classification",
        "Movie Recommendation System",
        "Wine Clustering",
        "Car Price Prediction",
        "Gold Price Prediction",
      ],
      comment: "From movies to rocks to gold—this repo has it all! 🐾🧠",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <img src={catProjectGif} alt="Cat working on a project" className="cat-gif" />
      <p className="intro-text">
        Let’s take a pawsome journey through my favorite projects, guided by our curious cat companion! 🐱💻
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.subProjects && (
              <ul>
                {project.subProjects.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            )}
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              Check it out
            </a>
            <p className="cat-comment">{project.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
