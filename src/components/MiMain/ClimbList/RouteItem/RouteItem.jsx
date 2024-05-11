import React from 'react'

function RouteItem({provincia, lugar, url_sectores, sector, via, grado_dificultad, favorito, encadenar }) { //eliminamos props y podemos usar las variabnles entre llaves
  return (
    <article>
        <h4>Provincia : {provincia}</h4>
        <h4>Lugar : {lugar}</h4>
        <img src={url_sectores} width={200} alt={lugar} />
        <h4>Sector: {sector}</h4>
        <h4>Vía : {via}</h4>
        <h4>Grado : {grado_dificultad}</h4>
        <br />
        <button onClick={()=>favorito()}>Favorito</button>
        <button onClick={()=>encadenar()}>Encadenada</button>
    </article>
  )
}

export default RouteItem