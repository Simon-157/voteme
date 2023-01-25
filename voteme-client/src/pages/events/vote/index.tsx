import React, { useState } from "react";
import voteStyles from "./vote-styles.module.scss";
import { Categories } from "@/utils/data/Categories";
import { Candidates } from "@/utils/data/Nominee";
import Image from "next/image";
import pla from "@/utils/images/ashesi.png";

const ElectionCategories = () => {
  const [votes, setVotes] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVotes(parseInt(e.target.value));
  };
  return (
    <div className={voteStyles.electionCategories}>
      <h1>Election Categories</h1>
      {Categories.map((category, i) => {
        return (
          <div key={i} className={voteStyles.candidateListContainer}>
            <h2>
              {category.awardTitle}
              <hr />
            </h2>
            <div className={voteStyles.ballotPaperContainer}>
              {Candidates.map((candidate, index) => {
                if (candidate.awardId == category.awardId) {
                  return (
                    <div
                      key={index}
                      // className={voteStyles.ballotPaperContainer}
                    >
                      <div>
                        <div className={voteStyles.candidateRow}>
                          <div>
                            <Image
                              src={pla}
                              alt="Contestant 1"
                              width="150"
                              height="150"
                            />
                            <p>
                              {candidate.fname} {candidate.lname}
                            </p>
                          </div>
                          <div>
                            <input type="checkbox" />
                          </div>
                        </div>
                        <div className={voteStyles.votesInput}>
                          <label>
                            number of votes
                            <input
                              type="number"
                              value={votes}
                              onChange={handleChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          // </div>
        );
      })}
    </div>
  );
};
export default ElectionCategories;
