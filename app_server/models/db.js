const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://abjith7858:abjith123@conestoga.himba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbURI, { 
    dbName: 'myfoodDB', 
    useNewUrlParser: true, 
    useUnifiedTopology: true});    

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
});
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
});
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
    process.exit(0);
});
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
});
});

require('./food');