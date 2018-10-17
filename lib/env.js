"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const result = require('dotenv').config({ path: path.join(__dirname, './../.env')
});
if (result.error) {
    throw result.error;
}
exports.env = result.parsed;
