const mongoose = require('mongoose');
const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env;
let connection = null;
if(DB_USER) {
   connection = mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   {useNewUrlParser: true});
} else {
   connection = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   {useNewUrlParser: true});
}
connection.then(() => {console.log(`connected to ${DB_NAME}`)}).catch(err=>{throw err});
module.exports = connection;