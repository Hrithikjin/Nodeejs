const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let contacts = [];

app.get('/', (req, res) => {
    res.render('demo', { contacts });
});

app.post('/submit', (req, res) => {
    const { name, number, email } = req.body;
    contacts.push({ id: contacts.length + 1, name, number, email });
    res.redirect('/');
});

app.listen(port, () => {
    console.log('Server running on',port);
});
