export {};

const {
  fetchUserByEmailDb,
  createUserDb,
} = require("../controllers/user-controller");

const fetchUserByEmail = async (email: string) => {
  try {
    return await fetchUserByEmailDb(email);
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (user: user) => {
  try {
    return await createUserDb(user);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchUserByEmail, createUser };
