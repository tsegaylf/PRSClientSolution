import { DecimalPipe } from "@angular/common";

export class Product {

    id: number = 0; 
    ptrnbr: string;
    name: string;
    price: DecimalPipe;
    unit: string;
    photopath: string;
    vendorid: number;

    constructor() {

    }
}