export class Request {

    id: number = 0;
    description: string;
    justification: string;
    rejectionReason: string;
    delivaryMode: string = "Pick-Up";
    status: string = "New";
    total: string = "0";
    userId: number;

    constructor(){

    }
}