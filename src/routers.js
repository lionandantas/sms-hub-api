import { Router } from "express";
import MensagemController from "./app/controllers/MensagemController";

const routers = new Router();

routers.post("/create", MensagemController.create);
routers.post("/send", MensagemController.send);
routers.post("/received", MensagemController.received);
routers.post("/status", MensagemController.status);

export default routers;
