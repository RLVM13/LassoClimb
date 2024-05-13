const modelos = require("../models/sql.models.js");

const dataPrueba = [
    {
        "provincia": "Alicante",
        "lugar": "Alcalali",
        "sector": "Alcalali",
        "via": "Cactus Climb",
        "grado": "6c+",
        "image_url": "https://image.thecrag.com/240x320/64/ac/64ac7ab1eca7c499a7ac234b2ef013acaf6fa344"
    },
    {
        "provincia": "Alicante",
        "lugar": "Alcalali",
        "sector": "Alcalali",
        "via": "Akram el terrible",
        "grado": "7a",
        "image_url": "https://image.thecrag.com/240x320/64/ac/64ac7ab1eca7c499a7ac234b2ef013acaf6fa344"
    }
];


// USER
const createUser = async (req, res) => {
    const newUser = req.body;
    const response = await modelos.createUser(newUser);
    res.status(201).json({
        "item_created": response
    },
        {
            message: `usuario creado`
        });
};

const updateUser = async (req, res) => {
    const modifiedUser = req.body;
    const response = await modelos.editUserApi(modifiedUser);
    res.status(200).json({
        "item_updated": response
    }, {
        message: `usuario actualizado:`
    })
};


const deleteUser = async (req, res) => {
    let userSearch;
    if (req.params.email) {
        userSearch = await modelos.getUserByEmail(req.params.email);
        if (userSearch.length > 0) {
            //PRIMERO MANDAMOS BORRAR LOS FAVORITOS Y DESPUES BORRAMOS EL USUARIO
            await modelos.deleteFavouriteApi(req.params.email);
            await modelos.deleteUserApi(req.params.email);
            res.status(200).json({ message: `Se ha borrado el usuario con email: ${req.params.email}` })
        } else {
            res.status(404).json("No se ha encontrado el usuario")
        }
    }
    else {
        res.status(404).json("No se ha encontrado el usuario")
    }
};

// FAVOURITE
const createFavorite = async (req, res) => {
    const newFavourite = req.body;
    const response = await modelos.createFavorite(newFavourite);
    res.status(201).json({
        "item_created": response
    },
        {
            message: `favorito creado`
        });
}

const deleteFavorite = async (req, res) => {
    let userSearch;
    if (req.params.email) {
        userSearch = await modelos.getUserByEmail(req.params.email);
        if (userSearch.length > 0) {
            await modelos.deleteFavouriteApi(req.params.email);
            res.status(200).json({ message: `Se han borrado los favoritos del usuario con email: ${req.params.email}` })
        } else {
            res.status(404).json("No se ha encontrado favoritos")
        }
    }
    else {
        res.status(404).json("No se ha encontrado favoritos")
    }
}

// RUTAS
const createRoute = async (req, res) => {
    try {
        const newRoute = req.body;
        await modelos.createRoute(newRoute);
        res.status(201).json({ "message": "Ruta creada" })
    }
    catch (error) {
        res.json({ mensage: error.message })
    }
}

const getAllRoutes = async (req, res) => {
    try {
        const routes = await modelos.getAllRoutes()
        res.json(routes)
    }
    catch (error) {
        res.json({ mensage: error.message })
    }
}

const getRoute = async (req, res) => {
    try {
        const route = await modelos.getRoute({
            where: { via: req.params.via }
        })
        res.json(route)
    }
    catch (error) {
        res.json({ mensage: error.message })
    }
}

const getSearch = async (req, res) => {
    console.log(req.query.search);
    const busqueda = req.query.search;
    if (busqueda) {
        let resultado = await modelos.getBuscador({ titulo: { $regex: titulo, $options: 'i' } }, '-id, -__v');
        res.status(200).json(resultado);
    }
    else {
        res.status(400).send("problemas");
    }
}

const updateRoute = async (req, res) => {
    try {
        const route = await modelos.update(req.body, {
            where: { id: req.params.id }
        })
    } catch (error) {
        res.json({ mensage: error.message })
    }
}


//EXPORTACION DE DATOS
module.exports = {
    createUser,
    updateUser,
    deleteUser,

    createRoute,
    getAllRoutes,
    getRoute,
    updateRoute,
    getSearch,

    createFavorite,
    deleteFavorite,
}