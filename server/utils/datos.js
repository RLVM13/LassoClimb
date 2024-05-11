const datos = [
    {
        "provincia": "Cataluña",
        "lugar": "Siurana",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/news/0awhpjxf.webp",
        "sector": "La Siuranella Central",
        "via": "La Rambla",
        "grado_dificultad": "9a+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/lpsmrdak.webp",
        "sector": "Cancho Amarillo",
        "via": "Valentina",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/4xqi22zw.webp",
        "sector": "Las Rocas",
        "via": "La Belén",
        "grado_dificultad": "6c"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/la2fm1o1.webp",
        "sector": "La Tortuga",
        "via": "La Cosa",
        "grado_dificultad": "6a+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wixauu5o.webp",
        "sector": "El Yelmo",
        "via": "Directísima",
        "grado_dificultad": "6c"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/p4x2bzgm.webp",
        "sector": "El Hueso",
        "via": "La Nueva Normal",
        "grado_dificultad": "5c"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/zx2chxzs.webp",
        "sector": "El Dedo de Dios",
        "via": "Dedo de Dios",
        "grado_dificultad": "6b+"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/3yq5zhgg.webp",
        "sector": "El Gallinero",
        "via": "El Oso y el Madroño",
        "grado_dificultad": "7b"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xy55sbx4.webp",
        "sector": "La Pared de Santillana",
        "via": "El Gran Diedro",
        "grado_dificultad": "6a"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/b4faqfn5.webp",
        "sector": "La Aguja",
        "via": "La Raja",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/od1vt013.webp",
        "sector": "La Mocha",
        "via": "Pancha y Punta",
        "grado_dificultad": "6c+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xrba1aem.webp",
        "sector": "Las Torres",
        "via": "La Directa",
        "grado_dificultad": "6b"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "sector": "La Peña del Arcipreste",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/qvid1g05.webp",
        "via": "El Divino",
        "grado_dificultad": "6c"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/5g2v5uff.webp",
        "sector": "El Pan de Kilo",
        "via": "Cuerda Larga",
        "grado_dificultad": "6a+"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/kjwjxnaw.webp",
        "sector": "El Pino",
        "via": "El Pino",
        "grado_dificultad": "6a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/a51rmj5f.webp",
        "sector": "La Pancha",
        "via": "El Canelón",
        "grado_dificultad": "6c+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wlrxeo3s.webp",
        "sector": "El Tolmo",
        "via": "El Espolón",
        "grado_dificultad": "6b"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/frc1nib4.webp",
        "sector": "Las Cuevas",
        "via": "El Cubo",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/w2pv0etr.webp",
        "sector": "El Centinela",
        "via": "Vía Láctea",
        "grado_dificultad": "6b+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/jkprrncd.webp",
        "sector": "La Raja",
        "via": "La Raja",
        "grado_dificultad": "7b+"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/xpi5xg2u.webp",
        "sector": "La Cueva",
        "via": "El Camino del Indio",
        "grado_dificultad": "6b"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/5ujafwjz.webp",
        "sector": "El Risco de la Peseta",
        "via": "El Canto del Loco",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/vtkthyoc.webp",
        "sector": "El Castillo",
        "via": "La Chimenea",
        "grado_dificultad": "6a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2hej0ofi.webp",
        "sector": "La Campana",
        "via": "Sonata",
        "grado_dificultad": "6b+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/hgfdwnzp.webp",
        "sector": "El Pájaro",
        "via": "El Diedro",
        "grado_dificultad": "6c"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2woctzgo.webp",
        "sector": "Las Cuevas",
        "via": "El Espolón",
        "grado_dificultad": "7a+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/gdtsachl.webp",
        "sector": "El Dedo",
        "via": "El Dedo",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/dtes1ofp.webp",
        "sector": "El Pino",
        "via": "El Fénix",
        "grado_dificultad": "6c+"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/0feyjrfd.webp",
        "sector": "El Humo",
        "via": "El Rayo",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/hmuxsx1j.webp",
        "sector": "El Trave",
        "via": "La Directa",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/urwz0ia2.webp",
        "sector": "La Peña de la Buho",
        "via": "La Pasión",
        "grado_dificultad": "6b"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/j2vqw44u.webp",
        "sector": "La Cueva de la Mora",
        "via": "El Enigma",
        "grado_dificultad": "6c+"
    },
    {
        "provincia": "Madrid",
        "lugar": "La Pedriza",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/wdzdxgyu.webp",
        "sector": "El Hueso",
        "via": "El Hueso",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Madrid",
        "lugar": "Torrelodones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/3f4kwxz5.webp",
        "sector": "El Pinar",
        "via": "El Pinar",
        "grado_dificultad": "6a+"
    },
    {
        "provincia": "Madrid",
        "lugar": "Patones",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/vxf4vmsx.webp",
        "sector": "El Gallinero",
        "via": "El Gallinero",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/l2n3prql.webp",
        "sector": "Los Delfines",
        "via": "Hombres y mujeres",
        "grado_dificultad": "7c+"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/iim5ut0j.webp",
        "sector": "El Paredón",
        "via": "La Leyenda Continúa",
        "grado_dificultad": "8a+"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/sylp4gex.webp",
        "sector": "La Cueva de la Araña",
        "via": "Ojos Rojos",
        "grado_dificultad": "7b"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/qoa55xif.webp",
        "sector": "El Rincón de los Jubilados",
        "via": "Gabriela",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/gokn1hhc.webp",
        "sector": "El Oasis",
        "via": "Sol y sombra",
        "grado_dificultad": "6b+"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/mf1p5mcn.webp",
        "sector": "Las Torcas",
        "via": "Desafío Vertical",
        "grado_dificultad": "7c"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/x2bmpzw0.webp",
        "sector": "El Callejón",
        "via": "Techo Manía",
        "grado_dificultad": "8b"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/axbqbvoy.webp",
        "sector": "Las Tablas",
        "via": "De Perdidos al Río",
        "grado_dificultad": "6c"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/2vqlmgew.webp",
        "sector": "El Castillo",
        "via": "La Chica Dorada",
        "grado_dificultad": "7a"
    },
    {
        "provincia": "Cuenca",
        "lugar": "Hoces de Cuenca",
        "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/jjlz404n.webp",
        "sector": "El Colegio",
        "via": "El Callejón",
        "grado_dificultad": "7b+"
    }
];

module.exports = datos;