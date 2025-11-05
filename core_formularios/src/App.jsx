// src/App.jsx
import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Card from './components/Card';

function App() {
  const [heroes, setHeroes] = useState([]);

  const agregarHeroe = (nuevoHeroe) => {
    setHeroes([...heroes, nuevoHeroe]);
  };

  return (
    <>
      <h1>
        Bienvenido a la Liga de Superhéroes 
      </h1>
      
      <Formulario agregarHeroe={agregarHeroe} />

      <div className="contenedor-cards">
        {heroes.map((heroe, index) => (
          <Card
            key={index}
            nombre={heroe.nombre}
            apellido={heroe.apellido}
          />
        ))}
      </div>
    </>
  );
}

export default App;
