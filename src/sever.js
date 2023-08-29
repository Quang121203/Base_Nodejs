const express = require('express');
const appConfig = require('./config/appConfig');
const controller = require('./controllers/homeController');

//dotnet config
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

//variable
const app = express()
const port = process.env.PORT;

//template, file static config
appConfig(app);



app.get('/', (req, res) => controller.homeController(req, res));

app.get('/abc', (req, res) => controller.abcController(req, res));

app.get('/test', (req, res) => controller.testController(req, res));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})