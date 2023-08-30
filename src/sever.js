const express = require('express');
const appConfig = require('./config/appConfig');
const controller = require('./controllers/homeController');
const routes = require('./routes/web.js');
const connection = require('./database/connection');



//dotnet config
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

//variable
const app = express()
const port = process.env.PORT;

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) 

//template, file static config
appConfig(app);

//routes
app.use('/', routes)

//database config



//done
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})