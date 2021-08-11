const mongoose = require("mongoose");
const producto = require("../01-setup/models/producto");
//const mensaje = require('../01-setup/models/mensaje');
const config = require("../01-setup/config.js");

class Productos {
  constructor() {
    // incializar variables
    this.listaProductos = [{}];
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
    /* buscar todos los producto */
    console.log("\nbuscar todos los producto");
    async () => {
      let contenido = await producto.find({});
      return contenido;
    };
    //console.log(contenido);
  }

  save(objeto) {
    /* crear un nuevo producto */
    console.log("\ncrear un nuevo producto");
    const productos = this.read();

    let id = productos.length + 1;
    let item = {
      title: objeto.title,
      price: objeto.price,
      thumbnail: objeto.thumbnail,
      id: id,
    };

    let usuarioGuardado = async () => await producto.create(item);
    console.log(usuarioGuardado);
    return item;
  }

  update(id, objeto) {
    /* buscar un solo usuario */
    console.log("\nbuscar un solo usuario");
    let result = async () => await producto.findOne({ id: id });
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
    let usuarioGuardado = async () => await result.save();
    // usuario.updateOne({nombre: 'Emanuel'}, { $set: {password: 8787878}});
    console.log(usuarioGuardado);
    return item;
  }

  delete(id) {
    let result = async () => await producto.findOne({ id: id });

    async () => await producto.deleteOne({ id: id });
    return result;
}
}

module.exports = new Productos();
