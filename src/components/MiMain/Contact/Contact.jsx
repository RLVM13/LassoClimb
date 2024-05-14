import React, { useEffect, useState } from 'react';

const Contact = () => {

  //Iniciamos el estado formulario con un valor por defecto
   const [formulario, setFormulario] = useState({
          nombre: 'Pepe',
          email: 'pepe@pepe.es',
          curso: 'React.js',
      })

  const {nombre,email,curso} = formulario;

   const handleChange = ({ target }) => {
      
      const { name, value } = target;

      setFormulario({
          ...formulario,
          [name]: value //[] establece propiedad computada del objeto, si no puesieramos [] crearría una nueva propiedad del objeto
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        comentarios: e.target.comentarios.value
    }
    setFormulario(data); // Modificar el estado de Formulario
  }

  //Usamos el useEffect, es recomendable disparar por separado los useEffect que tengan responsabilidad Única

   //este sólo se ejecutará la primera vez que se carge el componente
  useEffect(() => {
              console.log('1. se ejecuta el useEffect')
          }, [])

  //este se ejecutará cada vez que cambie el estado del formulario
  useEffect(() => {
              console.log('ha cambiado el estado del formulario')
          }, [formulario])


   //este se ejecutará cada vez que cambie el estado del nombre
  useEffect(() => {
      console.log('Ha cambiado el nombre')
  }, [nombre])
  
  return(
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contacta con nosotros</h2><br />
          <input type="text" name='nombre' placeholder='Nombre' onChange={handleChange}/><br />
          <input type="email" name='email' placeholder='Email'/><br />
          <textarea name="comentarios" placeholder='Comentarios' width="165px" height="100px" /><br />
          <button type='submit' >Enviar</button>
      </form>

  )
}

export default Contact;  