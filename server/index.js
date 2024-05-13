const express = require('express');

//INICIALIZAR SERVER
const app = express();
const port = 3000;

require('dotenv').config();
const datos = require('../server/utils/datos.js'); //DATOS EN LOCAL

//SOLUCIONAR PROBLEMA DE CORS 
const cors= require("cors");
app.use(cors());

// FICHEROS DE RUTAS
const apiRoutes = require("./routes/api.routes");
const pool = require('../server/config/db_pgsql.js');

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true })); //ENVIO DE FORMULARIOS

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// Rutas API
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Esto Tira!!!. Funcionando en: http://localhost:${port}`)
})