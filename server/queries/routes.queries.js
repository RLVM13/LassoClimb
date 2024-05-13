const routesQueries = {
    /* -- Crear tabla de rutas */
    tablaRutas: `CREATE TABLE routes (
        route_id serial NOT NULL PRIMARY KEY UNIQUE,
        provincia varchar(100),
        lugar varchar(100),
        sector varchar(100),
        via varchar(100),
        grado varchar(25),
        image_url varchar(255));`,

    /* -- Insertar datos en tabla de rutas*/
    insertarRuta: `INSERT INTO routes (provincia, lugar, sector, via, grado, image_url) 
        VALUES ($1,$2,$3,$4,$5,$6);`,

    mostrarRutas: `SELECT provincia, lugar, sector, via, grado, image_url FROM routes;`,

    mostrarRuta: `SELECT provincia, lugar, sector, via, grado, image_url FROM routes WHERE via=$1;`,

    buscarRuta: `SELECT provincia, lugar, sector, via, grado, image_url FROM routes WHERE provincia=$1;`,

    /* -- Eliminar datos en tabla de rutas*/
    borrarRuta: `DELETE FROM routes WHERE user_id=(SELECT user_id FROM users WHERE email=$1);`,
}

module.exports = routesQueries;