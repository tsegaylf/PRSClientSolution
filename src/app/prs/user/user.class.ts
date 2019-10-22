export class User {

    //all non-nullable ones need a value

    id: number = 0; //if we don't set the value for the integer values we will get a null 
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean = false; // if we don't set these values for the booleans we will get a null 
    isAdmin: boolean = false;

    constructor () {

    }
}