import { useState } from "react";
import "./App.css";
import ProdCard from "./components/ProdCard";
import styles from "./css/ProdCard.module.css";

const productosData = [
  {
    nombre: "Laptop",
    descripcion: "Una potente laptop para trabajar y jugar.",
    precio: 1500,
    stock: 10,
  },
  {
    nombre: "Smartphone",
    descripcion: "Un smartphone de ultima generacion con una de las mejores camaras.",
    precio: 800,
    stock: 0,
  },
  {
    nombre: "Auriculares",
    descripcion: "Auriculares con cancelacion de ruido. No escucharas nada a tu alrededor.",
    precio: 200,
    stock: 5,
  },
  {
    nombre: "Monitor",
    descripcion: "Monitor 4K para una experiencia visual increible.",
    precio: 300,
    stock: 7,
  },
];

function App() {
  const [listaProductos] = useState(productosData);

  return (
    <div className={styles.contenedorPagina}>
      <h1 className={styles.titulo}>TechStore - Tu Destino para la Mejor Tecnologia</h1>

      <div className={styles.areaProductos}>
        {listaProductos.map((prod, index) => (
          <ProdCard
            key={index}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
            stockInicial={prod.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
