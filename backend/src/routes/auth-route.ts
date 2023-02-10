// const {
//   signUpUser,
//   loginUser,
//   logoutUser,
// } = require("../controllers/auth-controller.ts");
const { validateSignUpUser, validateLoginUser } = require("./validation");
const express = require("express");
// const { getSecretAnswer } = require("../controllers/data-controller.ts");

// Add this function as a middleware to routes requiring authentication
// req.user will contain the current user in the routes
function checkAuth(req: any, res: any, next: any) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: { status: 401, data: "Not authorized" } });
  }
}

const router = express.Router();

router
  .post("/auth/signup", validateSignUpUser, signUpUser)
  .post("/auth/login", validateLoginUser, loginUser)
  .post("/auth/logout", logoutUser)
  .get("/data/secret", checkAuth, getSecretAnswer); // checkAuth middleware checks authentication

module.exports = router;
