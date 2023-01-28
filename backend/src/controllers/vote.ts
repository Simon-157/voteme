import Votes from "../types/Vote.interface";

import { Request, Response } from "express";
const { getClient } = require("../config/postgressdb");

const client = getClient();

const addVote = async (req: Request, res: Response) => {
  const { vote } = req.body;
  const sqlcode = `INSERT INTO Event_(voteId, voterId, nomineeId, numOfVotes) VALUES ($1, $2, $3, $4) RETURNING *, [vote?.voteId, vote?.voterId, vote?.nomineeId, vote?.numOfVotes]`;

  await client.query(sqlcode, (err: Error, result: any) => {
    if (err) console.log(err.message);
    else res.status(200).json(result);
  });
};
module.exports = { addVote };
