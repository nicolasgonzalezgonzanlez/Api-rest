const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create model db
const pacienteSchema = new Schema({
    nombre: {
        type: String,
        trim: true //elimina espacios en blanco
    },
    propietario: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('paciente', pacienteSchema);