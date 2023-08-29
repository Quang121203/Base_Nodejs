const express = require('express');

const appConfig = (app) => {
    //template config
    app.set('views', 'src/views');
    app.set('view engine', 'ejs');

    //file static config
    app.use(express.static('src/public'))
}

module.exports = appConfig;