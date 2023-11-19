const {Schema, model} = require('mongoose')

//Datos que se guardan en la BD
const negocioSchema = new Schema({

    nombreNegocio: String,
    categoria: String,
    direccionFisica: String,
    avatar: String

});
