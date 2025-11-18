import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Obra from './componentes/Obra';
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/art/:idObra" element={<Obra />} />
    </Routes>
  </Router>
);

export default App;
