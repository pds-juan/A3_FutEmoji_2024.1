import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "futemoji",
});

export default db