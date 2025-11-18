import { Link } from 'react-router-dom';
import { obras } from '../dataObras';

const Inicio = () => (
  <div className="inicio-contenedor">
    <h1 className="titulo-home">Bienvenido a la Galería de Arte Futurista</h1>

    <ul className="lista-obras">
      {Object.entries(obras).map(([id, obra]) => (
        <li key={id}>
          <Link className="link-obra" to={`/art/${id}`}>
            {obra.titulo}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Inicio;
