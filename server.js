const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB Connected'));

//error catching
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

app.listen(8080, () => {
    console.log(`A Node JS API is listening`);
});

