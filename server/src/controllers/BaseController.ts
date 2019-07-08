import {Connection, getConnection} from "typeorm";

export class BaseController {

    constructor() {
        this.db = getConnection();
    }

    protected db: Connection;
}