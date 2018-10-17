import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "before" })
export class ClientMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: () => any): void {
        console.log("Checking Client Header...");


        // Website you wish to allow to connect
        response.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,x-client-data, x-client-type, x-client-timezone, x-client-country,x-client-role,x-client-branch');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', true);


        next();
    }

}
