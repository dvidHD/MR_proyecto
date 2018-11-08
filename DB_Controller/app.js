const express = require ('express');
const bodyParser = require('body-parser');

const {Robot,Computadora,MElectrico,Consumible,MDidactico,Cable,Merma} = require('./mongoController');

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
    const mermaNuevoa = Merma({
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


app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
  });