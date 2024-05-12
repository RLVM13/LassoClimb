import React, { useState, useEffect } from 'react'; /* rfce te crea la estructura basica*/
import RouteItem from './RouteItem/RouteItem.jsx';
import axios from 'axios'

function ClimbList() {
    //Todo lo que quieras que haga, se debe poner antes del "Return", por ejemplo la creación de objeto

    //Estado inicial
    const [list, setList] = useState([]); // [{},{},{}] lista de items
    const [vias, setVias] = useState(""); //Filtro de vias

    const [values, setValues] = useState({ //nuevo estado de "Values"
        provincia: "",
        lugar: "",
        url_sectores: "",
        sector: "",
        via: "",
        grado_dificultad: ""
    })

    // useEffect [] para hacer la carga inicial de la API
    useEffect(() => {
        async function getVias() {
            try {
                const resp = await axios.get('http://localhost:3000/api/routes');
                const json = await resp.data;
                console.log(json);
                setList(json); // Guarda en el array de vias el resultado. Procesa los datos
            } catch (e) {
                setList(); //Si hay error, no pintas nada
            }
        }
        getVias(); //llamamos a la funcion que conecta y traer datos
    }, []); // Se ejecuta la primera vez que se renderiza el componente

    const paintItems = () =>
        list.map((item, index) => (
            <RouteItem
                key={index}
                provincia={item.provincia}
                lugar={item.lugar}
                image_url={item.image_url}
                sector={item.sector}
                via={item.via}
                grado={item.grado}
                favorito={() => favorito(index)}
                encadenar={() => encadenar(index)} //Le pasamos por props la funcion al hijo
            />
        ));

    const favorito = (pos) => {
        alert("Favorito Agregado");
    }

    const encadenar = (pos) => {
        alert("Enhorabuena por completar tu objetivo !!");
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.buscar.value);
        setValues(e.target.buscar.value); // Modificando el estado de Value
        fetchData(e.target.buscar.value);
    };

    async function fetchData(location) {
        console.log(location);
        try {
            console.log("ddrgddrydry");
            // Petición HTTP
            //http://localhost:3000/api/vias?location={location}
            const res = await axios.get(vias); //TU ENDPOINT API AQUI
            const json = res.data;
            // Guarda en el array de vias el resultado. Procesa los datos
            // Crea array falso con 2 vias de madrid
            const arrayFalso = [
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
                    "lugar": "Torrelodones",
                    "url_sectores": "https://d3byf4kaqtov0k.cloudfront.net/p/gallery/la2fm1o1.webp",
                    "sector": "La Tortuga",
                    "via": "La Cosa",
                    "grado_dificultad": "6a+"
                }
            ];
            // sobreescribir el objeto guardado en vias con las nuevas vias -- arreglar logica
            setVias(json.data.children.filter(c => c.data));
        } catch (e) {
            setVias([]) // No pintes nada 
        }

    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="buscar" placeholder="Buscar..." />
                <button type="submit">Search</button>
            </form>

            <h2>Éste es el listado de Vías</h2>
            {paintItems()}
        </section>
    );
}

export default ClimbList