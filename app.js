const express = require('express');

const app = express();
const {render} = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public/style'));
//app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use( (req,res, next) => {
    console.log('new request made');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/Lexoduz', (req, res) => {
    res.render('lexoduz')
});

app.get('/profile', (req, res) => {
    res.render('profile')
});

app.get('/contact', (req, res) => {
    res.render('contact')
})




