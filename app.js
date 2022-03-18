const express = require('express');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', 'htmls');

app.get('/index',(req, res) => {

    const frameworks = [
        {
            baslik : 'React',
            icerik : 'React Hooks ve React Native'
        },
        {
            baslik : 'Flutter',
            icerik : 'Dart ve Firebase'
        }
    ]

    res.render('index', {frameworks});
    // res.sendFile('./htmls/index.html', {root : __dirname},)       html file kullanılacaksa böyle
})

app.get('/', (req, res) => {
    res.redirect('/index');
})

app.get('/hakkimda', (req, res) => {

    res.render('hakkimda',{hakkimda : 'Emre Hakkında'});
})

app.get('/babasayfa',(req, res) => {

    res.render('babasayfa');
})

app.get('/emre',(req, res) => {

    res.render('emre');
})

app.use( (req, res) => {

    res.status(404).render('404');
})

