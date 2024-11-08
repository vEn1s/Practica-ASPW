import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';


export const createConnection = async () => {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica1',
  });

  return drizzle(pool);
};
