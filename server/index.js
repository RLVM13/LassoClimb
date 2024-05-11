const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
const datos = require('../server/utils/datos');

// Rutas
const apiRoutes = require("./routes/api.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/routes', (req, res)=>{
    res.json(datos);
   });

// Rutas API
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Esto Tira!!!. Funcionando en: http://localhost:${port}`)
})