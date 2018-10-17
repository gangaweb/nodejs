import { ExpressMiddlewareInterface } from "routing-controllers";
export declare class ClientMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: () => any): void;
}
