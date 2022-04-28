const mongoose = require('mongoose');
const MONGO_DB_URL = 'mongodb://localhost:27017/myself';

async function dbConnect() {
    await mongoose.connect(MONGO_DB_URL);
}
mongoose.connection.on('open', () => {
    console.log('Database Opened in Read/Write Mode ...')
});

mongoose.connection.on('error', (err) => {
    console.log(`something wrong was happened ${err} `);
});

async function disconnect() {
    await mongoose.disconnect();
}
module.exports = {
    dbConnect,
    disconnect,
};
