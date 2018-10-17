"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function encrypt(text) {
    const algorithm = 'aes-256-ctr';
    const password = 'd6F3Efeq';
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
exports.encrypt = encrypt;
function decrypt(text) {
    const algorithm = 'aes-256-ctr';
    const password = 'd6F3Efeq';
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
exports.decrypt = decrypt;
