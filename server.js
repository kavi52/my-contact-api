const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// inbuild middleware, this will give us the parser for our json body to receive in the req, otherwise we will get undefined in req.body
app.use(express.json())
// middleware
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})