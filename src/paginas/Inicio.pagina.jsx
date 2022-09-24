import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAvailableCharacters, availableCharactersSelector } from "../state/features/characters";
import { isLoadingSelector } from "../state/features/characters";
import "./Inicio.css";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const personagensSelector = useSelector(availableCharactersSelector);

  useEffect(() => {
    dispatch(fetchAvailableCharacters());
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      {isLoading ? <div className="loading">Carregando...</div> : null}
      <Filtros />
      <Paginacao />
      <GradePersonagens selector={availableCharactersSelector} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
