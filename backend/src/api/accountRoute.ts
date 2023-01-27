import { Router } from "express";
const controller = require("../controllers/account");

export const accountRoute = Router();

accountRoute.post("/createaccount", controller.addAccount);

accountRoute.get("/getaccount/:id", controller.getAccount);

accountRoute.put("/deactivateaccount/:id", controller.deactivateAccount);
