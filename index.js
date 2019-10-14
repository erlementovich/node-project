const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // Подключим шаблонизатор
app.use(bodyParser.urlencoded({ extended: true })); //Сможем парсить запрос и вытаскивать оттуда поле text="name"

const arr = ['hello', 'world', 'test'];

app.get('/', (req, res) => res.render('index', { arr: arr }));

app.get('/create', (req, res) => res.render('create'));

app.post('/create', (req, res) => {//Выведем данные, полученные в форме по submit в консоли
    arr.push(req.body.text);
    res.redirect('/');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
