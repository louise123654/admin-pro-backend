require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());
//Base de datos
dbConnection();

//mean_user
//evNs3Rf0ulk5BEMB


//Rutas
app.get( '/', (req, res) => {

    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    })

});


app.listen( process.env.PORT, () => {
    console.log( 'Servidor corriendo en el puerto ' + process.env.PORT );
})