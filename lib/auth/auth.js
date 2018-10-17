"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
class Auth {
    constructor() {
        this.cert = fs.readFileSync(path.join(__dirname, './../../src/auth/keys/') + "rs256-4096-private.rsa");
        this.publicCert = fs.readFileSync(path.join(__dirname, './../../src/auth/keys/') + "rs256-4096-public.pem");
    }
    ;
    ;
    generateToken(data) {
        return jwt.sign(data, this.cert.toString(), {
            algorithm: "RS256",
            expiresIn: '24h'
        });
    }
    verifyToken(token) {
        try {
            let temp = jwt.verify(token, this.publicCert.toString());
            1;
            return temp;
        }
        catch (e) {
            return false;
        }
    }
    currentUser(action) {
        return true;
    }
    getTokenFromHeader(header) {
        if (header) {
            let token = header.split(" ");
            header = token[1];
            return header;
        }
        else {
            return false;
        }
    }
    decodeUser(header) {
        let token = header["authorization"];
        let user = this.verifyToken(this.getTokenFromHeader(token));
        if (user) {
            return user;
        }
        else {
            return false;
        }
    }
    checkHeader(action, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let token = this.getTokenFromHeader(action.request.headers["authorization"]);
            if (token != false) {
                if (!this.verifyToken(token)) {
                    return false;
                }
                let flag = false;
                flag = true;
                return flag;
            }
            return false;
        });
    }
}
exports.Auth = Auth;
