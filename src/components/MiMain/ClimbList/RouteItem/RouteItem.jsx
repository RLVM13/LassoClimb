import React from 'react'

function RouteItem({provincia, lugar, image_url, sector, via, grado, favorito, encadenar }) { //eliminamos props y podemos usar las variabnles entre llaves
  return (
    <article>
        <h4>Provincia : {provincia}</h4>
        <h4>Lugar : {lugar}</h4>
        <img src={image_url} width={200} height={200} alt={via} /><br />
        <h4>Sector: {sector}</h4>
        <h4>Vía : {via}</h4>
        <h4>Grado : {grado}</h4>
        <br />
        <button onClick={()=>favorito()}>Favorito</button>
        <button onClick={()=>encadenar()}>Encadenada</button>
    </article>
  )
}

export default RouteItem