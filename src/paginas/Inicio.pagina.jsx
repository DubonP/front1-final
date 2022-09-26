import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAvailableCharacters,
  availableCharactersSelector,
  setSearch,
  isLoadingSelector,
} from "../state/features/characters";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const sliceCharacters = useSelector(availableCharactersSelector);

  useEffect(() => {
    dispatch(fetchAvailableCharacters());
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentposts = sliceCharacters.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // clear search
  const clearSearch = () => {
    dispatch(setSearch(""));
    dispatch(fetchAvailableCharacters());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button onClick={clearSearch} className="Reset_buton_inicio">Reset</button>
      </div>
      {isLoading ? <div className="loading">Carregando...</div> : null}
      <Filtros />
      <Paginacao
        postPerPage={postsPerPage}
        totalPosts={sliceCharacters.length}
        paginate={paginate}
      />
      <GradePersonagens selector={currentposts} />
      <Paginacao
        postPerPage={postsPerPage}
        totalPosts={sliceCharacters.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginaInicio;
