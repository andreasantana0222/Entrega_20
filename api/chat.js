const mongoose = require("mongoose");
//const producto = require('../01-setup/models/producto');
const mensaje = require("../01-setup/models/mensaje");
const config = require("../01-setup/config.js");

class Chat {
  constructor() {
    
    // conexion a la base de datos
    async () =>
      await mongoose.connect(config.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("conexion a la base de datos realizada!");
  }

  //TO DO 
  read() {
    /* buscar todos los mensajes */
    console.log("\nbuscar todos los mensajes");
    async () => {
      let contenido = await mensaje.find({});
      return contenido;
    };
  }

  save(objeto) {
    console.log("save");

    const contenido = this.read();
   
    let item = {
      author: objeto.author,
      text: objeto.text,
      email: objeto.email,
      datetime: new Date(Date.now()).toLocaleString(),
    };

    let usuarioGuardado = async () => await mensaje.create(item);
    console.log(usuarioGuardado);
    return item;
  }
}

module.exports = new Chat();
