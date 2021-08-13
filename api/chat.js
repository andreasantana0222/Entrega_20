const mongoose = require("mongoose");
//const producto = require('../01-setup/models/producto');
const mensaje = require("../01-setup/models/mensaje");
const config = require("../01-setup/config.js");

class Chat {
   constructor() {
    
    
  }

  //TO DO 
  async read() {
    /* buscar todos los mensajes */
    console.log("\nbuscar todos los mensajes");    
      let contenido = await mensaje.find({});
      return contenido;    
  }

  async save(objeto) {
    console.log("save");

    const contenido = await this.read();
   
    let item = {
      author: objeto.author,
      text: objeto.text,
      email: objeto.email,
      datetime: new Date(Date.now()).toLocaleString(),
    };

    let usuarioGuardado = await mensaje.create(item);
    console.log(usuarioGuardado);
    return item;
  }
}

module.exports = new Chat();
