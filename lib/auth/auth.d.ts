import { Action } from "routing-controllers";
export declare class Auth {
    private cert;
    private publicCert;
    generateToken(data: any): string;
    verifyToken(token: any): any;
    currentUser(action: Action): any;
    getTokenFromHeader(header: any): any;
    decodeUser(header: any): any;
    checkHeader(action: Action, roles: string[]): Promise<boolean>;
}
