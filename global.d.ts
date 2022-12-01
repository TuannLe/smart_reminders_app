declare interface IAction {
    action: string;
    payload: any;
}
declare interface ActionModel {
    type: string,
    payload: any,
}

declare interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}



