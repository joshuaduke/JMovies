const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 5050;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})