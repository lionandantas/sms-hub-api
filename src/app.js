import "dotenv/config";

import express from "express";
import "express-async-errors";
import routers from "./routers";
import "express-async-errors";
import cors from "cors";
import bodyparser from "body-parser";
import path from "path";
import './database';
import Youch from "youch";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routers();
    this.execptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(bodyparser.urlencoded({ extended: true }));
    this.server.use(function(req, res, next) {
      console.log("%s %s", req.method, req.url);
      next();
    });
  }

  routers() {
    this.server.use("/api", routers);
  }

  execptionHandler() {
    this.server.use(async (err, req, res, next) => {
     // if (process.env.NODE_ENV == "development") {
        const erros = await new Youch(err, req).toJSON();
        console.log(`${JSON.stringify(erros)}`);
        return res.status(500).json(erros);
      //}
      //return res.status(500).json({ error: erros });
    });
  }
}

export default new App().server;
