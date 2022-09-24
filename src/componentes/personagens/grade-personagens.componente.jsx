import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useSelector } from "react-redux";
import { availableCharactersSelector } from "../../state/features/characters";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ selector }) => {
  const personagens = useSelector(selector);
  return (
    <div className="grade-personagens">
      {personagens.map((personagem) => (
        <CardPersonagem key={personagem.id} personagem={personagem} />
      ))}
    </div>
  );
};

export default GradePersonagem;
