import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import pool from './configs/connectDB';

require('dotenv').config();

const path = require('path');
const app = express();
const port = process.env.PORT;

// ho tro gui data tu client len server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set up view engine and init web route
configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});