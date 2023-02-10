const { fetchUserByEmail, createUser } = require("../services/users-service");
const passport = require("passport");
const bcrypt = require("bcrypt");

const signUpUser = async (req: any, res: any, next: any) => {
  const { email, first_name, last_name, password } = req.body;

  try {
    const userDb = await fetchUserByEmail(email);
    if (userDb) {
      return res.status(422).json({
        error: { status: 422, data: "User with this email already exists." },
      });
    }

    const pwd_hash = await bcrypt.hash(password, 10);
    const user = {
      email,
      first_name,
      last_name,
      pwd_hash,
    };
    const newUser = await createUser(user);
    res.status(201).json({ user_id: newUser.id });
  } catch (err: any) {
    return next(err);
  }
};

const loginUser = (req: any, res: any, next: any) => {
  passport.authenticate("login", (err: Error, user: any, info: any) => {
    if (err) return res.status(500).send();
    if (!user) {
      return res
        .status(401)
        .json({ error: { status: 401, data: info.message } });
    }
    req.login(user, (err: Error) => {
      if (err) return next(err);
      const { id, first_name, last_name, email } = req.user as {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
      };
      return res.json({ id, first_name, last_name, email });
    });
  })(req, res, next);
};

const logoutUser = (req: any, res: any, next: any) => {
  req.logout();
  res.clearCookie("connect.sid");
  req.session.destroy(function (err: Error) {
    res.status(200).send();
  });
};

module.exports = {
  signUpUser,
  loginUser,
  logoutUser,
};
