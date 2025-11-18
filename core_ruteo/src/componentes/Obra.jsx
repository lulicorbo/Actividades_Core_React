import { useParams, useNavigate } from 'react-router-dom';
import { obras } from '../dataObras';

const Obra = () => {
  const { idObra } = useParams();
  const navigate = useNavigate();

  const obra = obras[idObra];
  const id = parseInt(idObra);

  if (!obra) return <div>Obra no encontrada</div>;

  const anterior = () => {
    if (id > 1) navigate(`/art/${id - 1}`);
  };

  const siguiente = () => {
    if (id < Object.keys(obras).length) navigate(`/art/${id + 1}`);
  };

  return (
    <div className="obra-contenedor">
      <h1 className="titulo-obra">{obra.titulo}</h1>

      <img
        src={obra.imagen}
        alt={obra.titulo}
        className="obra-imagen"
      />

      <div className="botones">
        <button className="btn" disabled={id === 1} onClick={anterior}>
          Anterior
        </button>
        <button className="btn" onClick={() => navigate("/")}>
          Inicio
        </button>
        <button
          className="btn"
          disabled={id === Object.keys(obras).length}
          onClick={siguiente}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Obra;
