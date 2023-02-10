import Event from "../types/event.interface";

import { Request, Response } from "express";
const { getClient } = require("../config/postgressdb");

const client = getClient();

const createEvent = async (req: Request, res: Response) => {
  const { event } = req.body;
  const sqlcode = `INSERT INTO Event_(eventId, accountId, eventTitle, eventType, eventimgurl, shortdesc) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *, [event?.eventId, event?.eventTitle, event?.Type, event?.eventImgUrl, event?.shortdesc]`;

  await client.query(sqlcode, (err: Error, result: any) => {
    if (err) console.log(err.message);
    else res.status(200).json(result);
  });
};

const deleteEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const sqlcode = `DELETE * from Event_ where eventId = ${id}`;
  await client.query(sqlcode, (err: Error, results: any) => {
    if (err) console.log(err.message);
    else res.status(200).json({ success: "successfully deleted an event" });
  });
};
