require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  userMiddleware = require('./userMiddlewares'),
  animals_ctrl = require('./controllers/animals_ctrl');


  const app = express();
  app.use(bodyParser.json());

  app.use(session({
    secret: 'sleurhganfosdjf;galkdjlgiuaj;sldklqi3asdfadf2y473op34utjgkjbdfq90w4towe8ry',
    resave: false,
    saveUninitialized: true
  }))
  app.use(userMiddleware.checkForSession);

  massive('postgres://ipifdlwyivkefi:e9303c08b640b48d86354b3d8ad385892bac48548e4385a47b015c0b6c79e64f@ec2-54-235-123-153.compute-1.amazonaws.com:5432/d370s34hjcbvr2?ssl=true').then((db) => {
    app.set('db', db);
  })

  app.get('/get/animals', animals_ctrl.get_animals);
  app.get('/get/details/:id', animals_ctrl.get_details);


  app.listen(6007, () => {
    console.log("I am listening on port", 6007)
  })