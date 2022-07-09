import {useState} from 'react'

const Card = ({foto}) => {
    const {id, likes, user, largeImageURL, userImageURL, previewURL} = foto
    const [activo, setActivo] = useState(false)

  return (
    <div className='card' onMouseOver={e => setActivo(true)} onMouseOut={e => setActivo(false)} >
        <a target='_blank' href={largeImageURL}>
            <img src={largeImageURL} alt={`Imagen de ${user}`} className="imagenes-card" loading='lazy' />
        </a>
        <div className={`card-info ${activo && 'activo'}`}>
            <div className='card-text'>
                <p>{user}</p>
                <span>{likes} likes</span>
               
            </div>
            <img src={previewURL} alt={`user image: ${user}`} className="imagen-user" />
        </div>
    </div>
  )
}

export default Card