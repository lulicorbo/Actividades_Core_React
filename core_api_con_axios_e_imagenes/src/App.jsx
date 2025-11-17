import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [foto, setFoto] = useState("");

  const obtenerFoto = async () => {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setFoto(res.data[0].url);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  };

    useEffect(() => {
    const fetchData = async () => {
      await obtenerFoto();
    };

    fetchData();
    }, []);

  return (
    <div className="contenedor">
      <h2 className="titulo">Random Imagen Gatito</h2>

      {foto && (
        <img
          src={foto}
          alt="Random pic"
          className="random-img"
        />
      )}

      <button
        className="boton"
        onClick={obtenerFoto}
      >
        Fetch New Random Image
      </button>
    </div>
  );
}

export default App;
