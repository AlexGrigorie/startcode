const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

require('dotenv').config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const connectDB = process.env.DATABASE_URI;
mongoose.connect(connectDB, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succssfully");
});

const usersRouter = require('./routes/user');
const userRouterRegistration = require('./routes/user-registration')

app.use('/users', usersRouter);
app.use('/user', userRouterRegistration);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})