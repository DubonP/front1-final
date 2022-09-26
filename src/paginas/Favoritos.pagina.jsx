import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { getFavCharacter, favoriteCharactersSelector } from "../state/features/characters";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  const favCharacters = useSelector(favoriteCharactersSelector);

  useEffect(() => {
    dispatch(getFavCharacter());
  }, []);

  const resetPage = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button onClick={resetPage} className="Reset_buton_inicio">Reset Favoritos</button>
      </div>
      <GradePersonagens selector={favCharacters} />
    </div>
  );
};

export default PaginaFavoritos;
