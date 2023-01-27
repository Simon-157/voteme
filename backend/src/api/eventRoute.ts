import { Router } from "express";

const controller = require("../controllers/event");
const eventRoute = Router();

eventRoute.post("/create-event", controller.createEvent);

eventRoute.put("/delete-even", controller.deleteEvent);

eventRoute.get("/get-event", controller.getEvent);

eventRoute.get("/get-event/:id", controller.getEventByID);
