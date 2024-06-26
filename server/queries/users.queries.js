const usuariosQueries = {
    /* -- Crear tabla usuarios */
    tablaUsuarios: `CREATE TABLE users (
        user_id serial NOT NULL PRIMARY KEY UNIQUE,
        isAdmin boolean DEFAULT false,
        username varchar(45),
        nombre varchar(45) NOT NULL,
        apellidos varchar(255),
        password varchar(45),
        email varchar(45) NOT NULL UNIQUE
    );`,

    /* -- Insertar datos en tabla usuarios */
    insertarUsuario: `INSERT INTO users(isAdmin, username, nombre, apellidos, password, email)
        VALUES ($1,$2,$3,$4,$5,$6);`,

    /* -- Editar datos en tabla usuarios */
    actualizarUsuario: `UPDATE users
        SET isAdmin=$1, 
            username=$2, 
            nombre=$3, 
            apellidos=$4,
        WHERE email=$5;`,

    /* -- para buscar al usuario y poder buscarlo por foreing */
    buscarUsuarioEmail: `SELECT user_id FROM usuarios WHERE email=$1`,

    /* -- Borrar usuario, primero se borran sus favoritos y despues se borra el usuario */
    /* -- Esta sentencia de favoritos, puede estar tanto en usuario como en favoritos */
    borrarFavoritosUsuario: `DELETE FROM favorites WHERE user_id=(SELECT user_id FROM users WHERE email='$1');`,
    borrarUsuario: `DELETE FROM users WHERE user_id=(SELECT user_id FROM users WHERE email='$1');`,
}

module.exports = usuariosQueries;