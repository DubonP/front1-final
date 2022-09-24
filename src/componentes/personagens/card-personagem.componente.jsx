import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { selectedCharactersSelector } from "../../state/features/characters";
import { useSelector } from "react-redux";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

const CardPersonagem = ({ personagem }) => {
  const isFavorito = useSelector(selectedCharactersSelector);

  function favorito(char) {
    if (isFavorito.toString().includes(char)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="card-personagem">
      <div className="card-personagem__imagem">
        <img src={personagem.image} alt={personagem.name} />
      </div>
      <div className="card-personagem__conteudo">
        <h3>{personagem.name}</h3>

        <div className="card-personagem__acoes">
          <BotaoFavorito
            charId={personagem.id}
            isFavorito={favorito(personagem.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPersonagem;
