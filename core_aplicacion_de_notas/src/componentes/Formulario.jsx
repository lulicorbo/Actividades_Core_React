import styles from './../css/Formulario.module.css'
import { useState } from "react";

const Formulario = ({listaNotas, setListaNotas})=> {
    const [nota,setNota] = useState('')
    const [prioridad,setPrioridad] = useState('')


    const agregarNota = (e)=>{
        e.preventDefault()
        setListaNotas([...listaNotas, { nota, prioridad }]);
        setNota('');
        setPrioridad('');
        }

    return (
        <div className="mb-3">
            <form onSubmit={(e)=> agregarNota(e)}>
                <div className="mb-3">
                    <input type="text" className="input-group-text" name="nota" id={styles.nota} value={nota} onChange={e=> setNota(e.target.value)}/>           
                </div>
                <div className="mb-3">
                    <select className="form-select" name="prioridad" id={styles.prioridad} value={prioridad} onChange={e=> setPrioridad(e.target.value)}>
                        <option value="---">---</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </div>
                <button type="submit"className={`btn btn-primary ${styles.addBtn}`} >Agregar Nota</button>
            </form>
        </div>
    )
}


export default Formulario;