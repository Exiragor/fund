import {Connection, createConnection} from "typeorm";

const migrateTables = async () => {
    const dbConn: Connection = await createConnection();
    if (dbConn) {
        await dbConn.runMigrations();
        await dbConn.close();
    }
};

migrateTables().catch(e => console.error(e.message));