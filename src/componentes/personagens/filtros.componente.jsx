import "./filtros.css";
import { useSelector, useDispatch } from "react-redux";
import { searchSelector, setSearch, fetchAvailableCharacters } from "../../state/features/characters";

const Filtros = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);

  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
          dispatch(fetchAvailableCharacters());
        }}
        
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
    </div>
  );
};

export default Filtros;
