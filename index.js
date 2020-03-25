const express = require('express');
const mongoose = require('mongoose');
//import router
const routes = require('./routes/index')
const bodyParcer = require('body-parser');
//create server
const app = express();

// connect database

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//enable body parser

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended: true}));
//enable route
app.use('/', routes());


// puerto
app.listen(4000, () => {
    console.log('servidor corriendo');
})