"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function JsonRes(data, err = true) {
    if (err) {
        return { "data": data, status: "ok" };
    }
    return { "data": data, status: "not_ok" };
}
exports.JsonRes = JsonRes;
