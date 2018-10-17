import { Sequelize } from 'sequelize-typescript';
import { env } from "./../env";
// import { ValidateModel } from "./validator";
import { JsonRes } from "../controllers/json"


// export const Validate: any = ValidateModel;

export class Database {
  
  constructor() {


  }

 


  public Db() {
    return new Sequelize({
      database: env.DB_NAME,
      dialect: env.DB,
      username: env.DB_USER,
      password: env.DB_PASS,
    });
  }

  
}
