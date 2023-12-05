require("dotenv").config();
const express = require("express");
const pool = require("./db");
const userRoute = require("./route/userRoute");

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT,() => {console.log(`Server is running on Port ${PORT}`)}); 

app.use(express.json());
app.use('/api', userRoute);

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database', err);
    } else {
      console.log('Connected to the database at', res.rows[0].now);
    }
  });


