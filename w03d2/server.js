const PORT = 3333;
const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');

//
// Middleware
//
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));

//
// Database
//
const breadTypes = ['naan', 'bannick', 'baguette', 'sourdough'];

//
// ROUTES
//

app.get('/', (req,res) => {
  console.log('Homepage has been requested');
  const templateVars = {
    breads: breadTypes
  };
  res.render('home', templateVars);
});

//
// CREATE
//
app.get('/breads/new', (req,res) => {
  res.render('new');
});

app.post('/breads/new', (req,res) => {
  console.log(`req.body`,req.body);
  breadTypes.push(req.body.type);
  res.redirect('/');
});

//
// READ     /breads/3
//
app.get('/breads/:id', (req,res) => {
  console.log(`req.params`,req.params);
  console.log(`READ Bread #: ${req.params.id}`);
  // res.send(`READ ${req.params.id}`);
  const templateVars = {
    id: req.params.id,
    type: breadTypes[req.params.id]
  };
  res.render('read', templateVars);
});


//
// UPDATE
//
app.get('/breads/edit/:id', (req,res) => {
  const templateVars = {
    id: req.params.id,
    type: breadTypes[req.params.id]
  };
  res.render('edit', templateVars);
});

app.post('/breads/edit/:id', (req,res) => {
  console.log(`req.body`,req.body);
  breadTypes[req.params.id] = req.body.type;
  res.redirect('/');
});

//
// DELETE
//
app.get('/breads/delete/:id', (req,res) => {
  const id = req.params.id;
  breadTypes.splice(id, 1);
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});
