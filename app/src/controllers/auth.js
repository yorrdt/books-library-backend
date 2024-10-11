const {login} = require('./auth/login.controller');
const {register} = require('./auth/register.controller');

module.exports = {
    login,
    register,
}