import { useState } from "react";
import styles from "../css/ProdCard.module.css";

function ProdCard({ nombre, descripcion, precio, stockInicial }) {
    const [stock, setStock] = useState(stockInicial);

    const comprar = () => {
        if (stock > 0) {
        setStock(stock - 1);
        }
    };

    const sinStock = stock === 0;

    return (
        <div className={styles.tarjetaProducto}>
        <h4>{nombre}</h4>
        <h4>${precio}</h4>

        <p>{descripcion}</p>

        {sinStock ? (
            <p className={styles.stockAgotado}>Agotado</p>
        ) : (
            <p className={styles.stockOk}>En Stock: {stock}</p>
        )}

        <button
            className={`${styles.botonComprar} ${sinStock ? styles.botonDeshabilitado : styles.botonActivo}`}
            onClick={comprar}
            disabled={sinStock}
        >
            {sinStock ? "Agotado" : "Comprar"}
        </button>
        </div>
    );
}

export default ProdCard;
