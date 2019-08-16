const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes);

app.listen(process.env.PORT,() => {
    console.log(`Listening on ${process.env.PORT} environment: ${process.env.NODE_ENV}`);
})