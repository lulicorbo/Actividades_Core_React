const Filtro = ({ filter, setFilter }) => {
  return (
    <select
      className="form-select"
      name="prioridad"
      id="prioridad"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">---</option>
      <option value="Alta">Alta</option>
      <option value="Media">Media</option>
      <option value="Baja">Baja</option>
    </select>
  );
};

export default Filtro;
