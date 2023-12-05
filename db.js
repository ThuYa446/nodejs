const { Pool } = require("pg");
const pool = new Pool({
    user: process.env.db_user,
    host: process.env.db_connection,
    database: process.env.db_dbname,
    password: process.env.db_password,
    port: process.env.db_port,
  });

module.exports = pool;