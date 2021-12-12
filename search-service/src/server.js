const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const {SEARCH_SERVICE_PORT} = require('../consts')

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || SEARCH_SERVICE_PORT

app.use(router)

app.listen(port , function(){
    console.log('Listening on port ' + port);
});
