const mongoose = require('mongoose');

const URI_DB = 'mongodb://admin:abc123@ds135233.mlab.com:35233/rbtx_system';

mongoose.connect(URI_DB,
    { useNewUrlParser: true },
    () => {
    console.log("Conexión exitosa con la BDD");
});

/*
// Shortcuts por comodiddad
const Schema =  mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;


// Esquemas (moldes) para crear colecciones en la bdd

const directorSchema = Schema ({
    director: ObjectId,
    nombre: {type:String, required: [true,"Why no name"]},
    edad: Number,
    peliculas: [String],
    imagen: String
});

const peliculaSchema = Schema ({
    pelciula: ObjectId,
    nombre: String,
    fecha: Date,
    director: [String],
    genero: String,
    duracion: Number,
    imagen: String
});

//  creamos los modelos que son el vinculo y nos permiten crear y modificar colecciones
// de nuestra BDD, las colecciones a su vez estan enlazadas con los esquemas

const Director = mongoose.model('Director',directorSchema);
const Pelicula = mongoose.model('Pelicula',peliculaSchema);

//exportar mediante npm los modelos para poder utilizarlos en otro archivo

module.exports = {Director,Pelicula};
*/