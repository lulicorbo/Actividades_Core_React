import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Formulario from './componentes/Formulario'
import { useState } from 'react'
import Filtro from './componentes/Filtro'
import Nota from './componentes/Nota'

function App() {
  const [listaNotas, setListaNotas] = useState([])
  const [filter, setFilter] = useState('')

  const listFiltered = !filter 
    ? listaNotas 
    : listaNotas.filter(nota => nota.prioridad === filter)

  return (
    <div 
        className='card shadow-lg'
        style={{
          width: "20rem",
          padding: "20px",
          margin: "40px auto",
          borderRadius: "12px",
        }}
      >


      <div className='card-header'>
        <h1>Notas</h1>

        <Formulario 
          listaNotas={listaNotas} 
          setListaNotas={setListaNotas}
        />
      </div>

      <div className='card-body'>
        <Filtro filter={filter} setFilter={setFilter} />
        <hr />

        {listFiltered.map((notaObj, index) => (
        <Nota
          key={index}
          nota={notaObj.nota}
          priority={notaObj.prioridad}
          listnotas={listaNotas}
          setlistNotas={setListaNotas}
          index={index}
        />
      ))}


      </div>

      <div className='card-footer'></div>
    </div>
  )
}

export default App
