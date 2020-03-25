const Paciente = require('../models/Paciente');

exports.nuevoCliente = async (req, res, next) => {
  // TODO: insert data in db
  const paciente = new Paciente(req.body)
  try {
    await paciente.save();//methods mongo, save date in db
    res.json({
      mensaje: 'el cliente se agrego correctamente'
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

//bring all pacientes

exports.obtenerPacientes = async (req, res, next) => {

  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes)
  } catch (error){
    console.log(error);
    next();
  }
}

//bring paciento for id 

exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id); //methods mongo, bring paciente
    res.json(paciente)
  } catch (error) {
    console.log(error);
    next();
  }
}

//update records for id

exports.actualizarPaciente = async (req, res, next) => {

  try {
    const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true
    })
    res.json(paciente)
  } catch (error) {
    console.log(error);
    next();
  }
}

//delete paciente for id

exports.eliminarPaciente = async (req, res, next) => {

  try {
    await Paciente.findByIdAndDelete({_id: req.params.id});
    res.json({mensaje: 'El paciente fue eliminado'});
  } catch (error) {
    console.log(error);
    next();
  }
}