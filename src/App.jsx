import { useState, useEffect } from "react"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"


function App() {

  const [palabra, setPalabra] = useState('')
  const [coleccion, setColeccion] = useState([])
  const [cargando, setCargando] = useState(false)

  const consultarAPI = async () => {
    setCargando(true)
    let API_KEY = '28534624-657b4ae6f9dda1d4888152a0e'
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${palabra}`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado.hits);
    setColeccion(resultado.hits)
    setCargando(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    consultarAPI()
    
    
  }
  useEffect(() => {
    consultarAPI()
  }, [])
  
 

  return (
    <main className="contenedor">
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" className="buscar" onChange={e => setPalabra(e.target.value)} />
        <button className="btn-buscar" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" className="buscar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        {/* <input type="submit" value="Buscar" className="btn-buscar" /> */}
        
      </form>
      <div>
        {cargando ? <Spinner /> : <Resultado coleccion={coleccion} /> }
      </div>
    </main>
  )
}

export default App
