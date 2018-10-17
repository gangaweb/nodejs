"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
let ClientMiddleware = class ClientMiddleware {
    use(request, response, next) {
        console.log("Checking Client Header...");
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,x-client-data, x-client-type, x-client-timezone, x-client-country,x-client-role,x-client-branch');
        response.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
};
ClientMiddleware = __decorate([
    routing_controllers_1.Middleware({ type: "before" })
], ClientMiddleware);
exports.ClientMiddleware = ClientMiddleware;
