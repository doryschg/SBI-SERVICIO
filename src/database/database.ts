import { Pool } from "pg";

export const pool=new Pool({
    user:'postgres',
    host:'localhost',
    password:'12345678',
    database:'hex',
    port:5432
});