const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8001;


const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
});

const Link = mongoose.model('Link', linkSchema);

//Formas de se conectar ao banco

/* mongoose.connect('mongodb://localhost:27017/links', (error, db) => {
    console.log(error);
    console.log(db);
}) */



/* mongoose.connect('mongodb://localhost:27017/links').then((db) => {

}).catch((err) => {

}) */



mongoose.connect('mongodb://localhost:27017/newLinks');
let db = mongoose.connection;

db.on("error", () => { console.log("ERROR") });
db.once('open', () => { console.log('OK') })


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.info(`Example app listening on port ${PORT}`);
});