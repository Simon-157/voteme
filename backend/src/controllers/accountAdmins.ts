import AccountAdmin from "../types/accountAdmin.interface";
import { Response, Request } from "express";
const { getClient } = require("../config/postgressdb");

const client = getClient();

const addUser = async (req: Request, res: Response) => {
  const { user } = req.body;
  const sqlcode = "INSERT INTO accountAdmin(userId, accountId, userEmail) VALUES ($1, $2, $3) RETURNING userId, [user?.userId, user?.accountId, user?.userEmail]";

  await client.query(sqlcode, (err: Error, results: Array<any>) => {
    if (err) console.log(err.message);
    else res.status(200).json({ message: "Successfully added a new admin" });
  });
};

const getUser = async (req: Request, res: Response) => {
  const user = req.body;
  const sqlcode = `SELECT * from accountAdmin where userId = ${user.userId} and userEmail = ${user.userEmail}`;
  client.query(sqlcode, (err: Error, results: Array<any>) => {
    if (err) res.send(err.message);
    else res.status(200).json(results);
  });
};
