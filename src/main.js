const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const port = 3000;

app.use(express.static('/public/img'))
app.use(express.static(path.join(__dirname,'/public')));

app.use(express.static(path.join(__dirname,'/public/img/')));



app.use(morgan('combined'));

app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));

// template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources//views'));

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
