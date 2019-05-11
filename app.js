const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//const fileStore = require('session-file-store');

const errorController = require('./controllers/error');


const app = express();

const port = process.env.PORT || 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.json());
app.use(cookieParser('12345-2112'));

app.use((req, res, next) => {
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://PGdb:Yq6hmrDY7bBJ2A@pg-ihylj.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
  .then(result => {
    app.listen(3000);
    console.log('Connected');
  }).catch(err => {
    console.log(err);
});