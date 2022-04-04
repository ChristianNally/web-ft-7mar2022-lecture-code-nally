const PORT = 8989;
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// CONFIG
const app = express();
app.set('view engine','ejs');

// DATABASE
const users = {
  'test@example.com': {email: 'test@example.com', password: 'test'},
  'test2@example.com': {email: 'test2@example.com', password: 'test2'},
};

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
// registration
app.get('/register', (req,res) => {
  res.render('register');
});

app.post('/register', (req,res) => {
  console.log('req.body',req.body); // this is where FORM values arrive (via middleware)
  users[req.body.email] = {email: req.body.email, password: req.body.password};
  res.redirect('/');
});

// login
app.get('/login', (req,res) => {
  res.render('login');
});

app.post('/login', (req,res) => {
  console.log('req.body',req.body); // this is where FORM values arrive (via middleware)

  const candidateEmailAddress = req.body.email;
  const candidatePassword = req.body.password;

  if (!users[candidateEmailAddress]) {
    res.redirect('/');
    return;
  }

  if ( candidatePassword === users[candidateEmailAddress].password ){
    res.cookie("user", candidateEmailAddress);
    res.redirect('/profile');
    return;
  }

  res.redirect('/');
  return;
});

// home
app.get('/', (req,res) => {
  console.log('users',users);
  res.render('home');
});

// profile
app.get('/profile', (req,res) => {
  console.log(`req.cookies`,req.cookies);
  const cookieBasedUser = req.cookies.user;
  if (!users[cookieBasedUser]){
    res.redirect('/');
    return;
  }
  const templateVars = {
    password: users[cookieBasedUser].password
  };
  res.render('profile', templateVars);
});

// logout
app.get('/logout', (req,res) => {
  res.clearCookie('user');
  res.redirect('/');
});


// 404 page not found
app.get('*', (req,res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
