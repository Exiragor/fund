import * as ts from "typescript";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT: string;
            APP_MODE: 'development' | 'production';
        }
    }
}