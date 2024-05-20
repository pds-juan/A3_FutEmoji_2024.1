import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
});

export default db