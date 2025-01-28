import React, { useState } from "react";
import "./FunRecommendation.css";
import catLoadingGif from "../assets/cat-loading.gif"; // Replace with your loading GIF

function FunRecommendation() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [interests, setInterests] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(""); // Clear previous result

    // Mock playful logic for prediction
    setTimeout(() => {
      const matchScore = Math.floor(Math.random() * 30) + 70; // Random score between 70-99
      const suggestions = [
        "building a recommendation system",
        "analyzing complex datasets",
        "creating a machine learning model",
        "deploying a cool AI app",
      ];
      const randomSuggestion =
        suggestions[Math.floor(Math.random() * suggestions.length)];

      const output = `Meow! 🐱 ${name}, the ${profession}, looks like you’re a ${matchScore}% purr-fect match for Harshada's skills! You’d work great on ${randomSuggestion}.`;
      setResult(output);
      setLoading(false);
    }, 2000); // Simulate "processing time"
  };

  return (
    <section className="fun-recommendation">
      <h2> Fun Recommendation System</h2>
      <p>Let’s see how well we’d work together! Enter your details below:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Alex Johnson"
            required
          />
        </label>

        <label>
          Your Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="e.g., Data Scientist"
            required
          />
        </label>

        <label>
          Your Interests:
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI, Cats, Visualization"
          />
        </label>

        <button type="submit">🔍 Predict Collaboration</button>
      </form>

      {loading && (
        <div className="loading">
          <img src={catLoadingGif} alt="Loading..." />
          <p>Meow! Crunching the data...</p>
        </div>
      )}

      {result && <div className="result">{result}</div>}
    </section>
  );
}

export default FunRecommendation;
