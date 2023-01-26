require("dotenv").config();
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { accountRoute } from "./src/api/accountRoute";
// const accountRoute = require("./src/api/accountRoute");
dotenv.config();
const app: Application = express();
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ Voteme: "the place for fair play" });
});
app.use("/accounts", accountRoute);
const server = app.listen(process.env.CLIENT_PORT || 5000, () => {
  console.log(`Server is listing on port ${process.env.CLIENT_PORT || 5000}`);
});
server.on("error", (e) => console.error("Error", e));
