const sql = require("./db.js");

// constructor
const Actividad = function(actividad) {
    this.idDetalleActividad = actividad.idDetalleActividad;
    this.descripcion = actividad.descripcion;
    this.fechaInicio = actividad.fechaInicio;
    this.fechaFinal = actividad.fechaFinal;
    this.fechaOptima = actividad.fechaOptima;
    this.idFechasLuna = actividad.idFechasLuna;
    this.idCuatrimestre = actividad.idCuatrimestre;
    this.idTiempo = actividad.idTiempo;
    this.idArbol = actividad.idArbol;
    this.idEpoca = actividad.idEpoca;
    this.idCambioSol = actividad.idCambioSol;
    this.idActividad = actividad.idActividad;

  };

  Actividad.getAll = result => {
    sql.query("SELECT * FROM detalleActividad", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("actividades: ", res);
      result(null, res);
    });
  };

  module.exports = Actividad;