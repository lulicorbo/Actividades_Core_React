import styles from './../css/Nota.module.css'

const Nota =({nota, priority, setlistNotas, listnotas, index})=> {

    const borrarNota =()=> {
        setlistNotas(listnotas.filter((n,i)=> i!=index))
    }

    return (
        <div className={`border bg-light ${styles.notaCard}`}>
            <p className='mb-0'>
                {nota} - 
                <span className={
                    priority === "Alta"
                        ? styles.alta
                        : priority === "Media"
                            ? styles.media
                            : styles.baja
                }>
                    {priority}
                </span>
            </p>

            <button className='btn btn-danger btn-sm' onClick={borrarNota}>
                Borrar
            </button>
        </div>
    ) 
}

export default Nota;
