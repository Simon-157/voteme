import Image from "next/image";
import React, { useState } from "react";
import test from "./style.module.scss";
import pla from "@/utils/images/ashesi.png";
const BallotPaper: React.FC = () => {
  const [votes, setVotes] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVotes(parseInt(e.target.value));
  };

  return (
    <div className={test.ballotPaperContainer}>
      <div>
        <h2>Choose your favorite contestant:</h2>
        <div className={test.candidateRow}>
          <div>
            <input type="checkbox" />
            <Image
              src={pla}
              alt="Contestant 1"
              width="100"
              height="100"
            />
            <p>Contestant 1</p>
          </div>
          <div>
            <input type="checkbox" />
            <Image
              src={pla}
              alt="Contestant 2"
              width="100"
              height="100"
            />
            <p>Contestant 2</p>
          </div>
          <div>
            <input type="checkbox" />
            <Image
              src={pla}
              alt="Contestant 3"
              width="100"
              height="100"
            />
            <p>Contestant 3</p>
          </div>
        </div>
        <div className={test.votesInput}>
          <label>
            Enter number of votes
            <input type="number" value={votes} onChange={handleChange} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BallotPaper;
