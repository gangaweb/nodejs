"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const env_1 = require("./../env");
class Database {
    constructor() {
    }
    Db() {
        return new sequelize_typescript_1.Sequelize({
            database: env_1.env.DB_NAME,
            dialect: env_1.env.DB,
            username: env_1.env.DB_USER,
            password: env_1.env.DB_PASS,
        });
    }
}
exports.Database = Database;
