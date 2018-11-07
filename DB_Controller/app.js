const express = require ('express');
const bodyParser = require('body-parser');

const {Robot,Computadora,MElectrico,Consumible,MDidactico,Cable,Merma} = require('./mongoController');

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//  get a raiz
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
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

app.delete('/bodega/v1/melectrico/:id/',(req,res) =>{
    MElectrico
        .findByIdAndDelete(req.params.id)
        .exec()
        .then()
        .catch(error => res.status(404).send(error));
});


/*
  // ----  Crud Peliculas ---//
// Post

  app.post('/api/v1/peliculas/',(req,res) =>{
    //cacho atributos
    const {nombre,fecha,director,genero,duracion,imagen} = req.body;
    // creo un nuevo objeto de la coleccion
    const peliculaNueva = Pelicula({
        nombre: nombre,
        fecha: fecha,
        director: director,
        genero: genero,
        duracion: duracion,
        imagen: imagen
    });

    //guardar el obj en la coleccion

    peliculaNueva.save((error,nuevaPelicula) => {
        res.status(201).send(nuevaPelicula);
    })

});

// GET ALL

app.get('/api/v1/peliculas/',(req,res) => {
       
    Pelicula
        .find()
        .exec()
        .then(listaPeliculas =>{
            res.status(200).send(listaPeliculas);
        })
        .catch(error => res.status(400).send(error));

});


// Get ONE
//lleva un query param
app.get('/api/v1/peliculas/:id/', (req,res) =>{
    const {id} = req.params;  // aplico des estructuracion

    Pelicula
        .findById(id)
        .exec()
        .then(pelicula => res.status(200).send(pelicula))
        .catch(error => {
            error.name === 'CastError'
            ?res.status(404).send({
                "Error": "no fue posible hallar la pelicula con el id especificado"
            })
            :res.status(404).send(error)
        });


});

// UPDATE ONE

app.put('/api/v1/pelicula/:id/', (req,res) =>{
    const {id} = req.params;

    Pelicula
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )
        .exec()
        .then(peliculaActualizada => res.status(200).send(peliculaActualizada))
        .catch(error => res.status(400).send(error));
})

app.delete('/api/v1/pelicula/:id/',(req,res) =>{
    Pelicula
        .findByIdAndDelete(req.params.id)
        .exec()
        .then(()=> res.status(204).send({"mensaje": "Pelicula eliminada"}))
        .catch(error => res.status(404).send(error));
});
*/

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
  });