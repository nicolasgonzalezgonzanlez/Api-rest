const express = require('express');
const router = express.Router();
const pacienteControler = require('../controlers/PacienteControler');
module.exports = function () {

    //add new paciente POST
    router.post('/pacientes', 
     pacienteControler.nuevoCliente
    )
    // bring all the records database
    router.get('/pacientes',
        pacienteControler.obtenerPacientes
    )
    // bring paciento for id 
    router.get('/pacientes/:id',
        pacienteControler.obtenerPaciente
    )

    //update records

    router.put('/pacientes/:id',
        pacienteControler.actualizarPaciente
    )

    //delete paciente for id

    router.delete('/pacientes/:id', 
        pacienteControler.eliminarPaciente
    )
    return router;
}