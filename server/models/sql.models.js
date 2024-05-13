const pool = require('../config/db_pgsql'); // Conexión a BBDD ElefantSQL

const queriesUsers = require("../queries/users.queries");
const queriesFavoritos = require("../queries/favorites.queries");
const queriesRoutes = require("../queries/routes.queries");

/* {
  "isAdmin": "false",
  "username": "Cervantes",
  "nombre": "Miguel",
  "apellidos": "Saavedra",
  "password": "7777777",
  "email":"cervantes@email.com"
} */

//POST USER
const createUser = async (user) => {
  const { isAdmin, username, nombre, apellidos, password, email } = user;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesUsers.insertarUsuario, [
      isAdmin,
      username,
      nombre,
      apellidos,
      password,
      email
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

/* {
  "isAdmin": "false",
  "username": "Diega",
  "nombre": "Manuela",
  "apellidos": "Pereza"
} */

//PUT USER
const editUserApi = async (user) => {
  const { isAdmin, username, nombre, apellidos, email } = user;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesUsers.actualizarUsuario, [
      isAdmin,
      username,
      nombre,
      apellidos,
      email
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//PARA BUSCAR SI EXISTE UN USUARIO ANTES DE BORRARLO
const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesUsers.buscarUsuarioEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//DELETE USER
const deleteUserApi = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesUsers.borrarUsuario, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//DELETE FAVOURITE USER
const deleteFavouriteApi = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesUsers.borrarFavoritosUsuario, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const createFavorite = async (favorite) => {
  const { user_id, title, anuncio_id, path } = favorite;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesFavoritos.insertarFavoritos, [
      user_id,
      title,
      anuncio_id,
      path
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const createRoute = async (route) => {
  const { provincia, lugar, sector, via, grado, image_url } = route;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesRoutes.insertarRuta, [
      provincia,
      lugar,
      sector,
      via,
      grado,
      image_url
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getAllRoutes = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesRoutes.mostrarRutas, []);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getRoute = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesRoutes.mostrarRuta, []);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getBuscador = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queriesRoutes.buscarRuta, []);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const apiModels = {
  createUser,
  createFavorite,
  createRoute,
  editUserApi,
  getUserByEmail,
  getAllRoutes,
  getRoute,
  getBuscador,
  deleteUserApi,
  deleteFavouriteApi
}

module.exports = apiModels;