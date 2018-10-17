import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    userid: number;
    name: string;
    email: string;
    mobile: string;
    CRT_TS: Date;
    MOD_TS: Date;
    IS_DEL: Date;
    IS_ACTV: boolean;
    CRT_BY: string;
    MOD_BY: string;
}
