import { Response, Request } from "express";
import Account from "../types/accounts.interface";

const { getClient } = require("../config/postgressdb");

const addAccount = async (req: Request, res: Response) => {
  const client = await getClient();
  await res.send({ account: "hit" });
  const account = req.body;
  const sqlcode = `INSERT INTO accounts(accountId,accountType, accountEmail) VALUES ($1, $2, $3) RETURNING *, [account?.accountId, account?.accountType, account?.accountEmail]`;
  await client.query(sqlcode, (err: Error, result: Array<any>) => {
    if (err) console.log(err.message);
    else console.log(result);
  });
  await client.end;
};

const getAccount = async (req: Request, res: Response) => {
  console.log("hit hit");
  const id = req.params.id;
  const client = await getClient();
  const sqlcode = `SELECT * from accounts where accountId = ${id}`;
  await client.query(sqlcode, async (err: Error, results: { rows: any }) => {
    if (err) console.log(err.message);
    else {
      console.log(results.rows);
      res.status(200).json({ account: results.rows });
    }
  });
  //   await client.end();
};

const activateAccount = async (req: Request, res: Response) => {
  const account: Account = await req.body;
  const sqlcode = `UPDATE accouts SET "isActive" = TRUE WHERE accountId = ${account.accountId}`;
  const client = await getClient();
  client.query(sqlcode, (err: Error, result: any) => {
    if (err) console.log(err.message);
    else console.log("succecc activating the account", account.accountId);
  });
  await client.end();
};

const deactivateAccount = async (req: Request, res: Response) => {
  const id = req.params.id;
  const sqlcode = `UPDATE accounts SET "isActive" = FALSE WHERE accountId = ${id} RETURNING ${id}`;
  const client = await getClient();
  client.query(sqlcode, (err: Error, result: any) => {
    if (err) console.log(err.message);
    else {
      res.status(200).json({ activatedAccount: id });
      console.log("success deactivating the account", id);
    }
  });

  //   await client.end();
};

module.exports = { addAccount, getAccount, deactivateAccount, activateAccount };
