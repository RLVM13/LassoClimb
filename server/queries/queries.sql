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
('Cataluña', 'Siurana', 'La Siuranella Central', 'La Rambla', '9a+', 'https://d3byf4kaqtov0k.cloudfront.net/p/news/0awhpjxf.webp'),
('Madrid', 'La Pedriza', 'Cancho Amarillo', 'Valentina', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/lpsmrdak.webp'),
('Madrid', 'Patones', 'Las Rocas', 'La Belén', '6c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/4xqi22zw.webp'),
('Madrid', 'Torrelodones', 'La Tortuga', 'La Cosa', '6a+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/la2fm1o1.webp'),
('Madrid', 'La Pedriza', 'El Yelmo', 'Directísima', '6c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wixauu5o.webp'),
('Madrid', 'La Pedriza', 'El Hueso', 'La Nueva Normal', '5c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/p4x2bzgm.webp'),
('Madrid', 'Torrelodones', 'El Dedo de Dios', 'Dedo de Dios', '6b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/zx2chxzs.webp'),
('Madrid', 'Patones', 'El Gallinero', 'El Oso y el Madroño', '7b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/3yq5zhgg.webp'),
('Madrid', 'La Pedriza', 'La Pared de Santillana', 'El Gran Diedro', '6a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xy55sbx4.webp'),
('Madrid', 'La Pedriza', 'La Aguja', 'La Raja', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/b4faqfn5.webp'),
('Madrid', 'Patones', 'La Mocha', 'Pancha y Punta', '6c+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/od1vt013.webp'),
('Madrid', 'La Pedriza', 'Las Torres', 'La Directa', '6b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xrba1aem.webp'),
('Madrid', 'Torrelodones', 'La Peña del Arcipreste', 'El Divino', '6c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/qvid1g05.webp'),
('Madrid', 'La Pedriza', 'El Tolmo', 'El Espolón', '6b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wlrxeo3s.webp'),
('Madrid', 'Patones', 'Las Cuevas', 'El Cubo', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/frc1nib4.webp'),
('Madrid', 'Torrelodones', 'El Centinela', 'Vía Láctea', '6b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/w2pv0etr.webp'),
('Madrid', 'La Pedriza', 'La Raja', 'La Raja', '7b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/jkprrncd.webp'),
('Madrid', 'Patones', 'La Cueva', 'El Camino del Indio', '6b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xpi5xg2u.webp'),
('Madrid', 'La Pedriza', 'El Risco de la Peseta', 'El Canto del Loco', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/5ujafwjz.webp'),
('Madrid', 'Patones', 'El Castillo', 'La Chimenea', '6a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/vtkthyoc.webp'),
('Madrid', 'Torrelodones', 'La Campana', 'Sonata', '6b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2hej0ofi.webp'),
('Madrid', 'La Pedriza', 'El Pájaro', 'El Diedro', '6c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/hgfdwnzp.webp'),
('Madrid', 'Patones', 'Las Cuevas', 'El Espolón', '7a+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2woctzgo.webp'),
('Madrid', 'La Pedriza', 'El Dedo', 'El Dedo', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/gdtsachl.webp'),
('Madrid', 'Torrelodones', 'El Pino', 'El Fénix', '6c+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/dtes1ofp.webp'),
('Madrid', 'Patones', 'El Humo', 'El Rayo', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/0feyjrfd.webp'),
('Madrid', 'La Pedriza', 'El Trave', 'La Directa', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/hmuxsx1j.webp'),
('Madrid', 'Torrelodones', 'La Peña de la Buho', 'La Pasión', '6b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/urwz0ia2.webp'),
('Madrid', 'Patones', 'La Cueva de la Mora', 'El Enigma', '6c+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/j2vqw44u.webp'),
('Madrid', 'La Pedriza', 'El Hueso', 'El Hueso', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wdzdxgyu.webp'),
('Madrid', 'Torrelodones', 'El Pinar', 'El Pinar', '6a+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/3f4kwxz5.webp'),
('Madrid', 'Patones', 'El Gallinero', 'El Gallinero', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/vxf4vmsx.webp'),
('Cuenca', 'Hoces de Cuenca', 'Los Delfines', 'Hombres y mujeres', '7c+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/l2n3prql.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Paredón', 'La Leyenda Continúa', '8a+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/iim5ut0j.webp'),
('Cuenca', 'Hoces de Cuenca', 'La Cueva de la Araña', 'Ojos Rojos', '7b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/sylp4gex.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Rincón de los Jubilados', 'Gabriela', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/qoa55xif.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Oasis', 'Sol y sombra', '6b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/gokn1hhc.webp'),
('Cuenca', 'Hoces de Cuenca', 'Las Torcas', 'Desafío Vertical', '7c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/mf1p5mcn.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Callejón', 'Techo Manía', '8b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/x2bmpzw0.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Callejón', 'Techo Manía', '8b', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/x2bmpzw0.webp'),
('Cuenca', 'Hoces de Cuenca', 'Las Tablas', 'De Perdidos al Río', '6c', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/axbqbvoy.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Castillo', 'La Chica Dorada', '7a', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2vqlmgew.webp'),
('Cuenca', 'Hoces de Cuenca', 'El Colegio', 'El Callejón', '7b+', 'https://d3byf4kaqtov0k.cloudfront.net/p/gallery/jjlz404n.webp');

-- Insertar datos en tabla favoritos
INSERT INTO favorites (user_id, route_id, favorite, complete)
VALUES
((SELECT user_id FROM users WHERE email='zubi@correo.com'),
((SELECT route_id FROM routes WHERE route_id='6')),'Proyecto23', 'false');

-- Buscar datos en tabla usuarios con email dado
SELECT * FROM users WHERE email='yo@correo.com';

-- Mostrar las rutas
SELECT * FROM routes;

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