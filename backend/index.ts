require("dotenv").config();
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { accountRoute } from "./src/api/accountRoute";
import compression from "compression";
const { getClient } = require("./src/config/postgressdb");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const passport = require("passport");
const morgan = require("morgan");
const routes = require("./src/routes/auth-route");
// const accountRoute = require("./src/api/accountRoute");
dotenv.config();
const app: Application = express();
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const isProduction = process.env.NODE_ENV === "production";

app.use(cors(options));
app.use(compression);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

if (isProduction) {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

// configure express-session to store data in postgres
const pool = getClient();

app.use(
  session({
    store: new pgSession({
      pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction, // SSL only in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 1 week
    },
  })
);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      data: error.message || "Internal Server Error",
    },
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ Voteme: "the place for fair play" });
});
app.use("/accounts", accountRoute);
app.use("/api", routes);

if (!isProduction) {
  const YAML = require("yamljs");
  const swaggerUI = require("swagger-ui-express");
  const swaggerDocument = YAML.load("./openapi.yaml");
  app.use(
    "/api/docs",
    swaggerUI.serve,
    swaggerUI.setup(
      swaggerDocument,
      // Option to disabe swagger Try it Out button
      { swaggerOptions: { supportedSubmitMethods: [] } }
    )
  );
}

const server = app.listen(process.env.CLIENT_PORT || 5000, () => {
  console.log(`Server is listing on port ${process.env.CLIENT_PORT || 5000}`);
});
server.on("error", (e) => console.error("Error", e));
