module.exports = (app) => {
    const express = require('express');
    const authRouter = express.Router();
    const jsonParser = express.json();


    const authController = require('../controllers/auth.js');

    authRouter.post('/login', jsonParser, authController.login);
    authRouter.post('/register', jsonParser, authController.register);

    app.use('/auth', authRouter);
}