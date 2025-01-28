import React from 'react';
import './Skills.css';
import CatWithCertificates from '../assets/cat-certificates.gif';

const skills = {
  'Data Analysis': ['Python', 'Pandas', 'NumPy', 'Excel', 'Tableau', 'Power BI'],
  'Data Engineering': ['SQL', 'ETL pipelines'],
  'ML Engineering': [
    { skill: 'Scikit-learn', link: 'https://coursera.org/share/7860647e3247571a70f56029b1b7e5fb' },
    { skill: 'TensorFlow', link: '' },
    { skill: 'PyTorch', link: '' },
    { skill: 'Model Deployment', link: '' },
    {
      skill: 'Deep Neural Networks',
      link: 'https://coursera.org/share/1f649f0209c3597ebd3a8367f181af89',
    },
  ],
};

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>

      <div className="content">
        {/* Cat Image with Coursera Certificates */}
        <img src={CatWithCertificates} alt="Cat with certificates" className="cat-cert-gif" />

        <div className="skills-info">
          {Object.keys(skills).map((category) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>

              {skills[category].map((skillItem, index) => {
                if (typeof skillItem === 'string') {
                  return <div className="skill" key={index}>{skillItem}</div>;
                }
                return (
                  <div className="skill" key={index}>
                    {skillItem.skill}
                    {skillItem.link && (
                      <a href={skillItem.link} target="_blank" rel="noreferrer">
                        (Certificate)
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
