const express = require('express');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', 'htmls');

app.get('/index',(req, res) => {

    res.render('index');
    // res.sendFile('./htmls/index.html', {root : __dirname},)
})

app.get('/', (req, res) => {

    res.redirect('/index');
})

app.use( (req, res) => {

    res.status(404).sendFile('./htmls/404.html', {root : __dirname});
} )