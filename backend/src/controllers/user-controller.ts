const { getClient } = require("../config/postgressdb");

const client = getClient();

type user = {
  email: string;
  first_name: string;
  last_name: string;
  pwd_hash: string;
};

const fetchUserByEmailDb = async (email: any) => {
  try {
    const res = await client.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return res.rows[0];
  } catch (err) {
    console.error(err);
  }
};

const createUserDb = async ({
  email,
  first_name,
  last_name,
  pwd_hash,
}: user) => {
  const text = `INSERT INTO users(email, first_name, last_name, pwd_hash)
                  VALUES($1, $2, $3, $4) RETURNING id`;
  const values = [email, first_name, last_name, pwd_hash];
  try {
    const res = await client.query(text, values);
    return res.rows[0];
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchUserByEmailDb, createUserDb };
