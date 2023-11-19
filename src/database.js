const mongoose = require('mongoose');

async function connect() {

    await mongoose.connect('mongodb://localhost/citamedb');

    console.log('DB is Connected.')


};

module.exports = { connect };

