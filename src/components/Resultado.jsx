import React from 'react'
import Card from './Card'
const Resultado = ({coleccion}) => {

  return (
    <div className='grid-coleccion'>
        {coleccion.map(foto => {
            return (
                <Card 
                    key={foto.id}
                    foto={foto}
                />
            )
        })}
    </div>
  )
}

export default Resultado