import React, { useState, useRef, useEffect } from 'react'; /* rfce te crea la estructura basica*/
import CardItem from '../Card';
import axios from 'axios';

import { MagicMotion } from "react-magic-motion";

function ClimbList() {
    //Todo lo que quieras que haga, se debe poner antes del "Return", por ejemplo la creación de objeto

    //Estado inicial
    const [list, setList] = useState([]); // [{},{},{}] lista de items
    const [location, setLocation] = useState(""); //Filtro de vias
    const [viaNueva, setviaNueva] = useState([]); // [{},{},{}] lista de items

    const [values, setValues] = useState({ //nuevo estado de "Values"
        provincia: "",
        lugar: "",
        url_sectores: "",
        sector: "",
        via: "",
        grado_dificultad: ""
    })

    const titleRef = useRef(""); // Referencia al input title 

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


    const paintItems = () => {

        let filtered_list = [];
        if (location !== "") {
            filtered_list = list.filter(list => list.provincia == location)
        } else {
            filtered_list = list;
        }

        return filtered_list.map((item, index) => (
            <CardItem
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
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.buscar.value);
        setValues(e.target.buscar.value); // Modificando el estado de Value
        setLocation(e.target.buscar.value);
        e.target.buscar.value = "";
    };

    const handleSubmit2 = e => {
        alert("Crear vía en la BBDD")
        e.preventDefault();
        const via = titleRef.current.value; // e.target.title.value; pero accede por referencia
        const sector = e.target.sector.value;
        const lugar = e.target.lugar.value;
        const provincia = e.target.provincia.value;
        const url = e.target.img_url.value;

        const item = { via, sector, lugar, provincia, url }; // Nuevo objeto destino
        setList([item, ...list]); // Añade el nuevo destino a la lista al principio
        console.log("*******");
        console.log(item);
        console.log(viaNueva);

        // Probando el uso de useRef
        console.log(titleRef.current.value);
        titleRef.current.value = "";
        console.log("-----");
        console.log(titleRef.current.value);

        //limpiar
        titleRef.current.value = "";
        e.target.sector.value = "";
        e.target.lugar.value = "";
        e.target.provincia.value = "";
        e.target.img_url.value = "";
    };

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const crearVia = () => {
        alert("Crear Vía");
    }

    return (
        <section className="climb-list">
            <form onSubmit={handleSubmit} className="buscador">
                <input type="text" name="buscar" placeholder="Escribe una provincia..." />
                <button type="submit">Search</button><br /><br />
            </form>

            <form onSubmit={handleSubmit2} className="form">
                <div>
                    <input type="text" name="via" placeholder="Vía" onChange={handleChange} ref={titleRef} />
                    <input type="text" name="sector" placeholder="Sector" onChange={handleChange} />
                    <input type="text" name="lugar" placeholder="Lugar" onChange={handleChange} />
                    <input type="text" name="provincia" placeholder="Provincia" onChange={handleChange} />
                    <input type="url" name="img_url" placeholder="Url de la imagen" onChange={handleChange} />
                </div>
                {values.via ?
                    <button onClick={crearVia}>Crear Vía</button>
                    : <></>}
            </form>
            <br /><h2>Éste es el listado de Vías</h2><br />
            <section>
                {paintItems()}
            </section>
        </section>
    );
}

export default ClimbList