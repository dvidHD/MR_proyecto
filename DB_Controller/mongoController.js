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

const claseSchema = Schema({
    clase: ObjectId,
    nivel: {type:String, required: [true,"Se necesita el nivel"]},
    escuela: String,
    dia: String
})

const instructorSchema = Schema({
    instructor: ObjectId,
    nombre: {type:String, required: [true,"Se necesita el nombre del instructor"]},
    clases: [{
        type: ObjectId,
        ref: 'Clase'
    }] 
})

const solicitudSchema = Schema({
    solicitud: ObjectId,
    material:{
        robot: [{type: ObjectId, ref: 'Robot'}],
        computadora: [{computadora: ObjectId,ref: 'Computadora'}],
        melectrico: [{melectrico: ObjectId,ref: 'MElectrico'}],
        consumible: [{consumible: ObjectId,ref: 'Consumible'}],
        mdidactico: [{mdidactico: ObjectId,ref: 'MDidactico'}],
        cable: [{cable: ObjectId,ref: 'Cable'}]
    }
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
const Clase = mongoose.model('Clase',claseSchema);
const Instructor = mongoose.model('Instructor',instructorSchema);
const Solicitud = mongoose.model('Instructor', solicitudSchema);


//exportar mediante npm los modelos para poder utilizarlos en otro archivo

module.exports = {
    Robot,
    Computadora,
    MElectrico,
    Consumible,
    MDidactico,
    Cable,
    Merma,
    Clase,
    Instructor,
    Solicitud
};
