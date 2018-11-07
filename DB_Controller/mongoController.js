const mongoose = require('mongoose');

const URI_DB = 'mongodb://admin:abc123@ds135233.mlab.com:35233/rbtx_system';

mongoose.connect(URI_DB,
    { useNewUrlParser: true },
    () => {
    console.log("Conexión exitosa con la BDD");
});


// Shortcuts por comodiddad
const Schema =  mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;


// Esquemas (moldes) para crear colecciones en la bdd

const robotSchema = Schema({
    robot: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de Robot"]},
    id: Number,
    comentario: String

});

const computadoraSchema = Schema({
    computadora: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de Robot"]},
    id: Number,
    comentario: String
});

const melectrictoSchema = Schema({
    melectrico: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de material eléctrico"]},
    cantidad: Number
})

const consumibleSchema = Schema ({
    consumible: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de material eléctrico"]},
    cantidad: Number
})

const mdidacticoSchema = Schema ({
    mdidactico: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de material didactico"]},
    cantidad: Number
})

const cablesSchema = Schema ({
    cables: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de material didactico"]},
    cantidad: Number
})

const mermaSchema = Schema ({
    merma: ObjectId,
    tipo: {type:String, required: [true,"Se necesita el tipo de material didactico"]},
    cantidad: Number,
    fecha: Date
})
//  creamos los modelos que son el vinculo y nos permiten crear y modificar colecciones
// de nuestra BDD, las colecciones a su vez estan enlazadas con los esquemas

const Robot = mongoose.model('Robot', robotSchema);
const Computadora = mongoose.model('Computadora', computadoraSchema);
const MElectrico = mongoose.model('MElectrico',melectrictoSchema);
const Consumible = mongoose.model('Consumible',consumibleSchema);
const MDidactico = mongoose.model('MDidactico',mdidacticoSchema);
const Cable = mongoose.model('Cable',cablesSchema);
const Merma = mongoose.model('Merma',mermaSchema);


//exportar mediante npm los modelos para poder utilizarlos en otro archivo

module.exports = {Robot,Computadora,MElectrico,Consumible,MDidactico,Cable,Merma};
