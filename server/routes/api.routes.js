const router = require("express").Router(); //enrutador de express

// ESTAMOS ENLAZANDO/IMPORTANDO EL CONTROLADOR PARA ENCONTRAR LOS METODOS.
// REPRESENTA EL OBJETO CON METODOS QUE MANEJAN LAS PETICIONES
const apiController = require('../controllers/api.controller.js');

// http://localhost:3000/api/user/
router.post("/user/", apiController.createUser);
router.put("/user/:email", apiController.updateUser);
router.delete("/user/:email", apiController.deleteUser);

// http://localhost:3000/api/favorite/
router.post("/favorite/", apiController.createFavorite);
router.delete("/favorite/:email", apiController.deleteFavorite);

// http://localhost:3000/api/routes/
router.post("/routes/new", apiController.createRoute);
router.get("/routes/", apiController.getAllRoutes);
router.get("/routes/:via", apiController.getRoute);
router.put("/routes/:via",apiController.updateRoute);

// http://localhost:3000/api/search/
router.get("/search", apiController.getSearch);


//ESTA EXPORTANDO EL PAQUETE DE RUTAS QUE SE HA PREPARADO
module.exports = router;
