import jwt = require("jsonwebtoken");
import fs = require("fs");
import path = require("path");

import {
    createExpressServer,
    Action
} from "routing-controllers";
export class Auth {
    private cert: Buffer = fs.readFileSync(path.join(__dirname, './../../src/auth/keys/') + "rs256-4096-private.rsa");;
    private publicCert: Buffer = fs.readFileSync(path.join(__dirname, './../../src/auth/keys/') + "rs256-4096-public.pem");;
    generateToken(data: any) {
        return jwt.sign(data, this.cert.toString(), {
            algorithm: "RS256",
            expiresIn: '24h'
        });
    }
    verifyToken(token: any) {
        try {
            let temp: any = jwt.verify(token, this.publicCert.toString());
            1
            return temp;
        } catch (e) {
            return false;
        }
    }
    currentUser(action: Action): any {
        return true;
    }
    getTokenFromHeader(header: any) {
        if (header) {
            let token: any = header.split(" ");
            header = token[1];
            return header;
        } else {
            return false;
        }
    }
    decodeUser(header: any) {
        let token = header["authorization"];
        let user = this.verifyToken(this.getTokenFromHeader(token));
        if (user) {
            return user;
        } else {
            return false;
        }
    }
    async checkHeader(action: Action, roles: string[]) {
        let token = this.getTokenFromHeader(action.request.headers["authorization"]);
        if (token != false) {
            if (!this.verifyToken(token)) {
                return false;
            }
            // let Config = new SwitchDb();
            // let SubDb = await Config.readSubDomain(action.request.headers);
            // let db: any;
            // if (SubDb == false) {
            //     db = Config.defaultDb();
            // } else {
            //     db = Config.get(SubDb);
            // }
            let flag = false;
            // await db.query("select * from `auth_info` where AUTH_KEY='" + token + "'").then((token: any) => {
            //     if (token) {
            //         // console.log("token[0][0].USER_ID")
            //         // console.log(token[0][0].USER_ID)
            //         if (token[0][0].USER_ID) {
                        flag = true;
            //         }
            //     }
            // })
            return flag;
        }
        return false;
    }
}