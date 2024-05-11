-- Crear tabla usuarios
CREATE TABLE users (
    user_id serial NOT NULL PRIMARY KEY UNIQUE,
    isAdmin boolean DEFAULT false,
    username varchar(45),
    nombre varchar(45) NOT NULL,
    apellidos varchar(255),
    password varchar(45),
    email varchar(45) NOT NULL UNIQUE
);

-- Crear tabla favoritos
CREATE TABLE favorites (
    favorite_id serial NOT NULL PRIMARY KEY UNIQUE,
    user_id int,
    route_id int,
    favorite varchar(100) NOT NULL UNIQUE,
    complete boolean DEFAULT false,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (route_id) REFERENCES routes(route_id)
);

-- Crear tabla rutas
CREATE TABLE routes (
    route_id serial NOT NULL PRIMARY KEY UNIQUE,
    provincia varchar(100),
    lugar varchar(100),
    sector varchar(100),
    via varchar(100),
    grado varchar(25),
    image_url varchar(255)
);

-- Insertar datos en tabla usuarios
INSERT INTO users(isAdmin, username, nombre, apellidos, password, email)
VALUES
('true', 'raf', 'rafael', 'lasso', '12345', 'rlvm13@gmail.com'),
('false', 'yo', 'p', 'prueba', '6789', 'yo@correo.com');

-- Insertar datos en tabla rutas
INSERT INTO routes(provincia, lugar, sector, via, grado, image_url)
VALUES
('Cataluña', 'Siurana', 'La Siuranella Central', 'La Rambla', '9a+', './assets/Siurana.jpg'),
('Madrid', 'La Pedriza', 'Cancho Amarillo', 'Valentina', '7a', './assets/Pedriza.jpg'),
('Madrid', 'Patones', 'Las Rocas', 'La Belén', '6c', './assets/Patones.jpg');

-- Insertar datos en tabla favoritos
INSERT INTO favorites (user_id, route_id, favorite, complete)
VALUES
((SELECT user_id FROM users WHERE email='yo@correo.com'),
((SELECT route_id FROM routes WHERE route_id='1')),'Directisima', 'false');

-- Buscar datos en tabla usuarios con email dado
SELECT * FROM users WHERE email='yo@correo.com'

-- Actualizar datos en tabla usuarios isAdmin, username, nombre, apellidos, password, email
UPDATE users
    SET
        isadmin='false', 
        username='brujo', 
        nombre='pepe', 
        apellidos='gomez gomez',
        password='00000',
    WHERE email = 'yo@correo.com';

-- Borrar usuario aunque tenga favoritos
DELETE FROM favorites WHERE user_id=(SELECT user_id FROM users WHERE email='yo@correo.com');
DELETE FROM users WHERE user_id=(SELECT user_id FROM users WHERE email='yo@correo.com');

-- Borrar favorito
DELETE FROM favorites WHERE favorite_id='5';

-- Sacar los datos relacionados
SELECT
	users."username",
	users."nombre",
	users."apellidos",
	users."email",
	favorites."favorite",
	favorites."complete",
	routes."lugar",
    routes."sector",
    routes."via",
    routes."grado"
FROM public."users" AS users
INNER JOIN public."favorites" AS favorites ON favorites."user_id" = users."user_id"
INNER JOIN public."routes" AS routes ON routes."route_id" = favorites."route_id"