const mongoose = require('mongoose');
const config = require('./config')
const url = config.bd_string;
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true 
};

exports.connect = () => {
    mongoose.connect(url, options);
    mongoose.set('useCreateIndex', true);
    
    mongoose.connection.on('error', (err) => {
        console.log('Erro na conexão com o banco de dados: ' + err);
    })
    
    mongoose.connection.on('disconnected', () => {
        console.log('Aplicação desconectada do banco de dados!');
    })
    
    mongoose.connection.on('connected', () => {
        console.log('Aplicação conectada ao banco de dados!');
    })
}