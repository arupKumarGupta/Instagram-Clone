// set up mongoose connection
require('./db/connection');
// configure express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
app.use(bodyParser.json());
app.use(cors());

// middleware for all our REST endpoints
app.use('/api',routes);

const listener = app.listen(process.env.PORT,() => {
    console.log(`Listening on ${process.env.PORT} environment: ${process.env.NODE_ENV}`);
});
module.exports = app;
module.exports.port = listener.address().port