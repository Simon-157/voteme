import React from "react";
import ballotStyles from "./ballot-paper.module.scss";

interface Props {
  candidateNames: string[];
}

const BallotPage: React.FC<Props> = ({ candidateNames }) => {
  return (
    <div className={ballotStyles.ballotContainer}>
      <div className={ballotStyles.candidateListContainer}>
        {candidateNames.map((candidateName, index) => (
          <div className={ballotStyles.candidateItem} key={index}>
            <input
              type="checkbox"
              className={ballotStyles.candidateCheckbox}
              id={`candidate-${index}`}
            />
            <label
              htmlFor={`candidate-${index}`}
              className={ballotStyles.candidateName}
            >
              {candidateName}
            </label>
          </div>
        ))}

        
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default BallotPage;
