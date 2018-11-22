import * as express from "express";
import { Application } from "express";
import bodyParser = require("body-parser");
import { createExpressServer, Action } from "routing-controllers";
import { env } from "./env";
// import { Auth } from "./auth/auth";
import "reflect-metadata";
import  "es6-shim";
import { PublicController} from "./controllers/public";
import {ClientMiddleware} from "./middleware/client";

// Config .Env
const host = env.APP_HOST || "0.0.0.0";
const port = env.APP_PORT || 3000;
const apiPrefix = env.API_PREFIX || "/api";
// const auth = new Auth();

const app = createExpressServer({

  routePrefix: apiPrefix,

  // authorizationChecker: async (action: Action, roles: string[]) => {

  //     return auth.checkHeader(action, roles);
    
  // },

  // currentUserChecker: async (action: Action) => {

  //   return auth.currentUser(action);
  // },

  defaultErrorHandler: false,
  controllers: [PublicController],
  middlewares: [ClientMiddleware],
});

// Parse the Json

app.use(express.static('/home/way2smile/uploads'))

app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, host, () => {

  console.info(`App listening on port ${port}!`);
});
