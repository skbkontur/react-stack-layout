// tslint:disable:no-any
import { AuthenticatedUserInfo } from "Domain/EDI/AuthenticatedUserInfo";

declare global {
    type TimeoutID = NodeJS.Timer;

    interface Window {
        authenticatedUserInfo?: null | AuthenticatedUserInfo;
        onunhandledrejection?(e: PromiseRejectionEvent, ...restArgs: any[]): void;
    }
}
