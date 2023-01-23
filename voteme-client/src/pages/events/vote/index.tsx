import React from "react";
import "./style.scss";

const ElectionCategories = ({ categories, candidates }) => {
  return (
    <div className="electionCategories">
      <h1>Election Categories</h1>
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <h2>{category.title}</h2>
            <ul>
              {candidates.map((candidate, j) => {
                if (candidate.category === category.title) {
                  return <li key={j}>{candidate.name}</li>;
                }
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default ElectionCategories;
