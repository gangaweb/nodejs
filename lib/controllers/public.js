"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const json_1 = require("./json");
const user_1 = require("./../model/user");
const db_1 = require("./db");
let PublicController = class PublicController {
    Unique(data, Headers) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                let Config = new db_1.Database();
                let db;
                db = Config.Db();
                db.addModels([user_1.User]);
                console.log(data);
                console.log("dataasdsad");
                let user = new user_1.User(data.data);
                user.save().then(result => {
                    if (result) {
                        resolve(json_1.JsonRes(result.toJSON(), true));
                    }
                    else {
                        resolve(json_1.JsonRes("No Account Found"));
                    }
                }, (error) => {
                    console.log(error);
                    resolve(json_1.JsonRes("User DB Error"));
                });
            });
        });
    }
};
__decorate([
    routing_controllers_1.Post("/register"),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.HeaderParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], PublicController.prototype, "Unique", null);
PublicController = __decorate([
    routing_controllers_1.JsonController()
], PublicController);
exports.PublicController = PublicController;
