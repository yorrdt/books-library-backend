const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Server is working');
});

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    response.header('Access-Control-Allow-Credentials', true);
    next();
});

const db = require("./src/scripts/database");
db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });


require('./src/routes/auth.route')(app);
require('./src/routes/book.route')(app);

db.sequelize.sync().then(result => { // { force: true }
    console.log("Synced db");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(err => console.log(err));