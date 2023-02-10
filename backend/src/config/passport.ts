export {};

const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require("passport-local").Strategy;
const { getClient } = require("./postgressdb");

/*
Easy way to generate key using crypto:
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
*/
const db = getClient();

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (
      email: any,
      password: any,
      done: (arg0: null, arg1: boolean, arg2: { message: string }) => any
    ) => {
      // Check if user exists
      db.query(
        `SELECT * FROM users WHERE email = $1`,
        [email],
        (err: any, result: { rows: any[] }) => {
          if (err) {
            return done(null, false, {
              message: "There was a problem logging in.",
            });
          }
          const user = result.rows[0];
          if (!user) {
            return done(null, false, {
              message: "Incorrect email or password.",
            });
          }

          // Compare entered password with hash stored in database
          bcrypt.compare(password, user.pwd_hash, (err: any, result: any) => {
            if (err) {
              return done(null, false, {
                message: "There was a problem logging in.",
              });
            }
            if (result) {
              return done(null, user, { message: "Logged in Successfully" });
            } else {
              return done(null, false, {
                message: "Incorrect email or password.",
              });
            }
          });
        }
      );
    }
  )
);

passport.serializeUser(
  (user: { id: any }, done: (arg0: null, arg1: any) => void) => {
    done(null, user.id);
  }
);

passport.deserializeUser((id: any, done: any) => {
  db.query(
    `SELECT id, email, first_name, last_name FROM users WHERE id = $1`,
    [id],
    (err: any, result: { rows: any[] }) => {
      if (err) {
        return done(err);
      }
      const user = result.rows[0];
      done(null, user);
    }
  );
});
