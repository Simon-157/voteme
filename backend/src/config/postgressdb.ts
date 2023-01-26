const { Client } = require("pg");
require("dotenv").config();

module.exports.getClient = async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: false,
  });
  await client
    .connect()
    .then((result: any) => {console.log("postgress connection established")})
    .catch((err: any) => {
      console.log(err);
    });
  return client;
};
