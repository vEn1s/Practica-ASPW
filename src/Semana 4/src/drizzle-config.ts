import mysql from 'mysql2/promise';

export async function createConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mi_base_de_datos',
    });

    return connection;
}
