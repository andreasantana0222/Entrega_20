const mongoose = require("mongoose");
const producto = require("../01-setup/models/producto");
//const mensaje = require('../01-setup/models/mensaje');
const config = require("../01-setup/config.js");

class Productos {
  constructor() {
    // incializar variables
    this.listaProductos = [{}];
    
  }

   //TO DO 
  async read() {
    /* buscar todos los producto */
    console.log("\nbuscar todos los producto");
    
      let contenido = await producto.find({});
      return contenido;
    
    console.log(contenido);
  }

  async save(objeto) {
    /* crear un nuevo producto */
    console.log("\ncrear un nuevo producto");
    const productos = await this.read();

    let id = productos.length + 1;
    let item = {
      title: objeto.title,
      price: objeto.price,
      thumbnail: objeto.thumbnail,
      id: id,
    };

    let usuarioGuardado =  await producto.create(item);
    console.log(usuarioGuardado);
    return item;
  }

  async update(id, objeto) {
    /* buscar un solo usuario */
    console.log("\nbuscar un solo usuario");
    let result =  await producto.findOne({ id: id });
    console.log(result);

    /* actualizar un usuario */
    console.log("\nactualizar un usuario");

    let item = {
      title: objeto.title,
      price: objeto.price,
      thumbnail: objeto.thumbnail,
      id: id,
    };
    result = item;

    //TO DO 
    let usuarioGuardado =  await result.save();
    // usuario.updateOne({nombre: 'Emanuel'}, { $set: {password: 8787878}});
    console.log(usuarioGuardado);
    return item;
  }

  async delete(id) {
    let result =  await producto.findOne({ id: id });

    async () => await producto.deleteOne({ id: id });
    return result;
}
}

module.exports = new Productos();
