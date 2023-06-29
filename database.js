const fs = require('fs');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
  connectionLimit: 10
});

async function executeSchemaFile(filePath) {
  try {
    const schema = fs.readFileSync(filePath, 'utf8');
    const connection = await pool.getConnection();
    await connection.query(schema);
    connection.release();
    console.log('Database setup successful.');
  } catch (error) {
    console.error('Error executing schema file:', error);
  }
}

executeSchemaFile('./db/schema.sql');

module.exports = pool;
