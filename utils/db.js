
const spicedPg = require('spiced-pg');
const relation = 'nerd-network';
const print = require('../utils/print');


// process.env.NODE_ENV === "production" ? secrets = process.env : secrets = require('./secrets');
const dbUrl = process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/${relation}`;
const db = spicedPg(dbUrl);

module.exports.ids = {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
};

module.exports.db = {

   
};




