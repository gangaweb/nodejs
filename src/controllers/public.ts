import { Controller, JsonController, Param, Body, Get, Post, Put, Req, Res, Delete, Location, Authorized, HeaderParams } from "routing-controllers";
import { encrypt, decrypt } from "../auth/cryptography";
import { JsonRes } from "./json"
import crypto = require('crypto');
// import { Auth } from "./../auth/auth";
import { User } from "./../model/user";
import { Database } from "./db";

@JsonController()
export class PublicController {

    @Post("/register")
    Unique(@Body() data: any, @HeaderParams() Headers: any): any {
        return new Promise(async function(resolve, reject) {
            let Config = new Database();
            let db: any;
            db = Config.Db();
            db.addModels([User])
            console.log(data);
            console.log("dataasdsad");
            let user=new User(data.data)
            user.save().then(result => {
                if (result) {
                    resolve(JsonRes(result.toJSON(), true));
                } else {
                    resolve(JsonRes("No Account Found"));
                }
            }, (error) => {
                console.log(error);
                resolve(JsonRes("User DB Error"));
            });
        });
    }
    
}