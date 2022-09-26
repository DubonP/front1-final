import "./botao-favorito.css";
import {
  addCharacters,
  removeCharacters,
  selectedCharactersSelector,
  getFavCharacter,
} from "../../state/features/characters";
import { useDispatch, useSelector } from "react-redux";

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
  const selectorPersonagem = useSelector(selectedCharactersSelector);


  const handleClick = () => {
    if (selectorPersonagem.includes(charId)) {
      if (selectorPersonagem.length === 1 && window.location.pathname === "/favoritos") {
        dispatch(removeCharacters(charId));
        dispatch(getFavCharacter([]));
        window.location.reload();
      } else {
      dispatch(removeCharacters(charId));
      dispatch(getFavCharacter());
      }
    } else {
      dispatch(addCharacters(charId));
      dispatch(getFavCharacter());
    }
  };

  return (
    <div className="wrapper">
      
        {isFavorito ? (
          <button className="botao-desfavorito" onClick={handleClick}>
          <div className="featherFalse">Unlike</div>
          </button>
        ) : (
          <button className="botao-favorito" onClick={handleClick}>
          <div className="featherTrue">Like</div>
          </button>
        )}
      
    </div>
  );
};

export default BotaoFavorito;
