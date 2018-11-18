const express = require ('express');
const bodyParser = require('body-parser');

const {Robot,Computadora,MElectrico,Consumible,
    MDidactico,Cable,Merma,Clase,Instructor,Solicitud} = require('./mongoController');

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//  get a raiz
app.get('/', (req, res) => {
    res.status(200).send('');
  });

  const port = process.env.PORT || 3000;

// --- CRUD ROBOT  ----//

//Create one

app.post('/bodega/v1/robot',(req,res) =>{
    //cacho atributos
    const {tipo,id,comentario} = req.body;
    // creo un nuevo objeto de la coleccion
    const robotNuevo = Robot({
        tipo: tipo,
        id: id,
        comentario: comentario
    });

    //guardar el obj en la coleccion

    robotNuevo.save((error,nuevoRobot) => {
        res.status(201).send(nuevoRobot);
    })

});

// Get ALL

app.get('/bodega/v1/robot',(req,res) => {
       
    Robot
        .find()
        .exec()
        .then(listaRobots =>{
            res.status(200).send(listaRobots);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/robot/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Robot
        .findById(id)
        .exec()
        .then(robot => res.status(200).send(robot))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el robot con el id especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/robot/:id/', (req,res) =>{
    const {id} = req.params;

    Robot
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(robotActualizado => res.status(200).send(robotActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/robot/:id/',(req,res) =>{
    Robot
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD COMPUTADORA  ----//

//Create one

app.post('/bodega/v1/computadora',(req,res) =>{
    //cacho atributos
    const {tipo,id,comentario} = req.body;
    // creo un nuevo objeto de la coleccion
    const computadoraNueva = Computadora({
        tipo: tipo,
        id: id,
        comentario: comentario
    });

    //guardar el obj en la coleccion

    computadoraNueva.save((error,nuevaComputadora) => {
        res.status(201).send(nuevaComputadora);
    })

});

// Get ALL

app.get('/bodega/v1/computadora',(req,res) => {
       
    Computadora
        .find()
        .exec()
        .then(listaComputadoras =>{
            res.status(200).send(listaComputadoras);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/computadora/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Computadora
        .findById(id)
        .exec()
        .then(computadora => res.status(200).send(computadora))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar la computadora con el id especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/computadora/:id/', (req,res) =>{
    const {id} = req.params;

    Computadora
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(computadoraActualizada => res.status(200).send(computadoraActualizada))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/computadora/:id/',(req,res) =>{
    Computadora
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});
 

// --- CRUD MELECTRICO  ----//

//Create one

app.post('/bodega/v1/melectrico',(req,res) =>{
    //cacho atributos
    const {tipo,cantidad} = req.body;
    // creo un nuevo objeto de la coleccion
    const melectricoNuevo = MElectrico({
        tipo: tipo,
        cantidad: cantidad
    });

    //guardar el obj en la coleccion

    melectricoNuevo.save((error,nuevoMElectrico) => {
        res.status(201).send(nuevoMElectrico);
    })

});

// Get ALL

app.get('/bodega/v1/melectrico',(req,res) => {
       
    MElectrico
        .find()
        .exec()
        .then(listaMElectrico =>{
            res.status(200).send(listaMElectrico);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/melectrico/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    MElectrico
        .findById(id)
        .exec()
        .then(melectrico => res.status(200).send(melectrico))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el material especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/melectrico/:id/', (req,res) =>{
    const {id} = req.params;

    MElectrico
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(melectricoActualizado => res.status(200).send(melectricoActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/melectrico/:id/',(req,res) =>{
    MElectrico
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});


// --- CRUD CONSUMIBLE ----//

//Create one

app.post('/bodega/v1/consumible',(req,res) =>{
    //cacho atributos
    const {tipo,cantidad} = req.body;
    // creo un nuevo objeto de la coleccion
    const consumibleNuevo = Consumible({
        tipo: tipo,
        cantidad: cantidad
    });

    //guardar el obj en la coleccion

    consumibleNuevo.save((error,nuevoConsumible) => {
        res.status(201).send(nuevoConsumible);
    })

});

// Get ALL

app.get('/bodega/v1/consumible',(req,res) => {
       
    Consumible
        .find()
        .exec()
        .then(listaConsumibles =>{
            res.status(200).send(listaConsumibles);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/consumible/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Consumible
        .findById(id)
        .exec()
        .then(consumible => res.status(200).send(consumible))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el consumible especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/consumible/:id/', (req,res) =>{
    const {id} = req.params;

    Consumible
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(consumibleActualizado => res.status(200).send(consumibleActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/consumible/:id/',(req,res) =>{
    Consumible
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD MDIDACTICO ----//

//Create one

app.post('/bodega/v1/mdidactico',(req,res) =>{
    //cacho atributos
    const {tipo,cantidad} = req.body;
    // creo un nuevo objeto de la coleccion
    const mdidacticoNuevo = MDidactico({
        tipo: tipo,
        cantidad: cantidad
    });

    //guardar el obj en la coleccion

    mdidacticoNuevo.save((error,nuevoMDidactico) => {
        res.status(201).send(nuevoMDidactico);
    })

});

// Get ALL

app.get('/bodega/v1/mdidactico',(req,res) => {
       
    MDidactico
        .find()
        .exec()
        .then(listaMDidactico =>{
            res.status(200).send(listaMDidactico);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/mdidactico/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    MDidactico
        .findById(id)
        .exec()
        .then(mdidactico => res.status(200).send(mdidactico))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el  material didactico especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/mdidactico/:id/', (req,res) =>{
    const {id} = req.params;

    MDidactico
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(mdidacticoActualizado => res.status(200).send(mdidacticoActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/mdidactico/:id/',(req,res) =>{
    MDidactico
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD CABLE ----//

//Create one

app.post('/bodega/v1/cable',(req,res) =>{
    //cacho atributos
    const {tipo,cantidad} = req.body;
    // creo un nuevo objeto de la coleccion
    const cableNuevo = Cable({
        tipo: tipo,
        cantidad: cantidad
    });

    //guardar el obj en la coleccion

    cableNuevo.save((error,nuevoCable) => {
        res.status(201).send(nuevoCable);
    })

});

// Get ALL

app.get('/bodega/v1/cable',(req,res) => {
       
    Cable
        .find()
        .exec()
        .then(listaCables =>{
            res.status(200).send(listaCables);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/cable/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Cable
        .findById(id)
        .exec()
        .then(cable => res.status(200).send(cable))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el  tipo de cable especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/cable/:id/', (req,res) =>{
    const {id} = req.params;

    Cable
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(cableActualizado => res.status(200).send(cableActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/cable/:id/',(req,res) =>{
    Cable
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD MERMA ----//

//Create one

app.post('/bodega/v1/merma',(req,res) =>{
    //cacho atributos
    const {tipo,cantidad, fecha} = req.body;
    // creo un nuevo objeto de la coleccion
    const mermaNueva = Merma({
        tipo: tipo,
        cantidad: cantidad,
        fecha: fecha
    });

    //guardar el obj en la coleccion

    mermaNueva.save((error,nuevaMerma) => {
        res.status(201).send(nuevaMerma);
    })

});

// Get ALL

app.get('/bodega/v1/merma',(req,res) => {
       
    Merma
        .find()
        .exec()
        .then(listaMerma =>{
            res.status(200).send(listaMerma);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/bodega/v1/merma/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Merma
        .findById(id)
        .exec()
        .then(merma => res.status(200).send(merma))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar la merma especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/bodega/v1/merma/:id/', (req,res) =>{
    const {id} = req.params;

    Merma
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(mermaActualizada => res.status(200).send(mermaActualizada))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/bodega/v1/merma/:id/',(req,res) =>{
    Merma
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD CLASE----//

//Create one

app.post('/operacion/v1/clase',(req,res) =>{
    //cacho atributos
    const {nivel,escuela, dia} = req.body;
    // creo un nuevo objeto de la coleccion
    const claseNueva = Clase({
        nivel: nivel,
        escuela:escuela,
        dia: dia
    });

    //guardar el obj en la coleccion

    claseNueva.save((error,nuevaClase) => {
        res.status(201).send(nuevaClase);
    })

});

// Get ALL

app.get('/operacion/v1/clase',(req,res) => {
       
    Clase
        .find()
        .exec()
        .then(listaClases =>{
            res.status(200).send(listaClases);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/operacion/v1/clase/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Clase
        .findById(id)
        .exec()
        .then(clase => res.status(200).send(clase))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar la clase especificada"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/operacion/v1/clase/:id/', (req,res) =>{
    const {id} = req.params;

    Clase
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(claseActualizada => res.status(200).send(claseActualizada))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/operacion/v1/clase/:id/',(req,res) =>{
    Clase
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});


// --- CRUD INSTRUCTOR---//

//Create one

app.post('/operacion/v1/instructor',(req,res) =>{
    //cacho atributos
    const {nombre, clases} = req.body;
    // creo un nuevo objeto de la coleccion
    const instructorNuevo = Clase({
        nombre: nombre,
        clases: clases
    });

    //guardar el obj en la coleccion

    instructorNuevo.save((error,nuevoInstructor) => {
        res.status(201).send(nuevoInstructor);
    })

});

// Get ALL

app.get('/operacion/v1/instructor',(req,res) => {
       
    Instructor
        .find()
        .populate('clases')
        .exec()
        .then(listaInstructores =>{
            res.status(200).send(listaInstructores);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/operacion/v1/instructor/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Instructor
        .findById(id)
        .populate('clases')
        .exec()
        .then(instructor => res.status(200).send(instructor))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar el instructor especificado"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/operacion/v1/instructor/:id/', (req,res) =>{
    const {id} = req.params;

    Instructor
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .populate('clases')
        .exec()
        .then(instructorActualizado => res.status(200).send(instructorActualizado))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/operacion/v1/instructor/:id/',(req,res) =>{
    
    Instructor
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

// --- CRUD SOLICITUD---//

//Create one

app.post('/operacion/v1/solicitud',(req,res) =>{
    //cacho atributos
    const {robot, computadora, melectrico, consumible, mdidactico, cable} = req.body;
    // creo un nuevo objeto de la coleccion
    const solicitudNueva = Clase({
        robot: robot,
        computadora: computadora,
        melectrico: melectrico,
        consumible: consumible,
        mdidactico: mdidactico,
        cable: cable
    });

    //guardar el obj en la coleccion

    solicitudNueva.save((error,nuevaSolicitud) => {
        res.status(201).send(nuevaSolicitud);
    })

});

// Get ALL

app.get('/operacion/v1/solicitud',(req,res) => {
       
    Solicitud
        .find()
        .populate('robot', 'computadora', 'melectrico', 'consumible', 'mdidactico', 'cable')
        .exec()
        .then(listaInstructores =>{
            res.status(200).send(listaInstructores);
        })
        .catch(error => res.status(400).send(error));

});

// Get ONE
//lleva un query param
app.get('/operacion/v1/solicitud/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des-estructuracion

    Solicitud
        .findById(id)
        .populate('robot', 'computadora', 'melectrico', 'consumible', 'mdidactico', 'cable')
        .exec()
        .then(solicitud => res.status(200).send(solicitud))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar la solicitud"
            })
            :res.status(404).send(error)
        });


});


//Update One

app.put('/operacion/v1/solicitud/:id/', (req,res) =>{
    const {id} = req.params;

    Solicitud
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .populate('robot', 'computadora', 'melectrico', 'consumible', 'mdidactico', 'cable')
        .exec()
        .then(solicitudActualizada => res.status(200).send(solicitudActualizada))
        .catch(error => res.status(400).send(error));
})

// Delete ONE

app.delete('/operacion/v1/solicitud/:id/',(req,res) =>{
    
    Solicitud
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});

app.listen(port, function () {
   
  });