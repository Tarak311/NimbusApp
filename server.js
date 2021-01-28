if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const path = require('path');
  const createError = require('http-errors');
  const bodyParser = require('body-parser');
  const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const cookieParser = require('cookie-parser')
  const passport = require('passport')
  const mongoose = require('mongoose')
  const flash = require('express-flash')
  const session = require('express-session')
  const UserModel  = require('./models/usermodel')
  const  MongoStore = require('connect-mongo')(session)
  const methodOverride = require('method-override')
  const db  = require('./lib/db')
  const auth  = require('./lib/auth')
  const secrets =   require( "./secrets")
  const config = require('./config')
  const apiRouter = require('./api')
  app.set('view engine', 'ejs');
  
  app.use(express.urlencoded({ extended: false }))
  app.use(flash())
  app.use(session({
    secret: secrets.pswd,
    resave: true,
    store: new MongoStore({mongooseConnection: db}),
    saveUninitialized: false  
  }))
  app.use(auth.initialize)
  app.use(auth.session) 
  app.use(auth.setUser)
  app.use(methodOverride('_method'))
  app.use(cookieParser())
  app.get('/', checkAuthenticated, (req, res) => {
    res.render('index', { name: req.user.name })
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login')
  })
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register')
  })
  
  app.post('/register',checkNotAuthenticated,async (req, res, next) => {
      try {
        const user = new UserModel({
          username: req.body.name,
          lastname : req.body.lastname,
          email: req.body.email,
          password: req.body.password,
        });
        const savedUser = await user.save();
  
        if (savedUser) return res.redirect('/login');
        return next(new Error('Failed to save user for unknown reasons'));
      } catch (err) {
        return next(err);
      }
    });
  
  
    
   
  
  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
  app.use('/api', apiRouter);
  app.use(express.static('public'));
  
  app.listen(config.port, () => {
    console.info('Express listening on port', config.port);
  });