import "./botao-favorito.css";
import {
  addCharacters,
  removeCharacters,
  setIsFavorito,
  isFavoritoSelector,
  selectedCharactersSelector,
} from "../../state/features/characters";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */

const BotaoFavorito = ({ isFavorito, charId }) => {
  const dispatch = useDispatch();
  const selectorFavorito = useSelector(isFavoritoSelector);
  const selectorPersonagem = useSelector(selectedCharactersSelector);
  const [favorito, setFavorito] = useState(isFavorito);

  const handleClick = () => {
    console.log("isFavorito", isFavorito);
    console.log("charId", charId);
    console.log("selectorisfavorito", selectorFavorito);
    console.log("ultimo favorito", favorito);
    if (isFavorito) {
      dispatch(removeCharacters(charId));
      setFavorito(false);
      console.log("selectorPersonagem", selectorPersonagem);
    } else {
      dispatch(addCharacters(charId));
      setFavorito(true);
      console.log("selectorPersonagem", selectorPersonagem);
    }
  };
  return (
    <div className="wrapper">
      <button className="botao-favorito" onClick={handleClick}>
        {isFavorito ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 0 0-7.78 7.78l1.07 1.07l7.78 7.78l7.78-7.78l1.07-1.07a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-heart"
          >
            <path d="M21.21 15.89a2 2 0 0 1-2.83 0L12 9.42l-6.38 6.38a2 2 0 0 1-2.83-2.83l7-7a2 2 0 0 1 2.83 0l7 7a2 2 0 0 1 0 2.83z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default BotaoFavorito;
