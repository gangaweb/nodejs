"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("./env");
require("reflect-metadata");
require("es6-shim");
const public_1 = require("./controllers/public");
const client_1 = require("./middleware/client");
const host = env_1.env.APP_HOST || "0.0.0.0";
const port = env_1.env.APP_PORT || 3000;
const apiPrefix = env_1.env.API_PREFIX || "/api";
const app = routing_controllers_1.createExpressServer({
    routePrefix: apiPrefix,
    defaultErrorHandler: false,
    controllers: [public_1.PublicController],
    middlewares: [client_1.ClientMiddleware],
});
app.use(express.static('/home/way2smile/uploads'));
app.use(bodyParser.json({ type: "application/json" }));
app.listen(port, host, () => {
    console.info(`App listening on port ${port}!`);
});
