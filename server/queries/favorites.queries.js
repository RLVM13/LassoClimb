const favoritesQueries = {
    /* -- Crear tabla favoritos */
    tablaFavoritos: `CREATE TABLE favorites (
        favorite_id serial NOT NULL PRIMARY KEY UNIQUE,
        user_id int,
        route_id int,
        favorite varchar(100) NOT NULL UNIQUE,
        complete boolean DEFAULT false,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (route_id) REFERENCES routes(route_id));`,

    /* -- Insertar datos en tabla favoritos */
    insertarFavoritos: `INSERT INTO favorites (user_id, route_id, favorite, complete) 
        VALUES ((SELECT user_id FROM users WHERE email=$1),$2,$3,$4);`,

    borrarFavoritoUsuario: `DELETE FROM favorites WHERE favorite_id=$1;`,
    }

module.exports = favoritesQueries;