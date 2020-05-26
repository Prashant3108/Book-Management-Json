const path = require('path')
const express = require('express')
const bookRouter = require('../src/router/book-router')
const bodyParser = require('body-parser')


const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../../public');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.json());
app.use('', bookRouter);
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



