import * as ts from "typescript";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT: string;
            APP_MODE: 'development' | 'production';
            APP_SECRET_KEY: string;
            APP_ADMIN_PASS: string;
        }
    }
}