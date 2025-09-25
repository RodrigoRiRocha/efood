import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Imagem,
  Tags,
  Tag,
  Conteudo,
  Titulo,
  Nota,
  Descricao,
  Botao
} from "./Listagem/styles";
import estrelaImg from "../assets/estrela.png";
import placeholderImg from "../assets/pizza.png";

interface RestauranteProps {
  id?: number | string;
  imagem?: string;
  nome: string;
  nota: number;
  tags: string[];
  descricao: string;
  destaque?: boolean;
}

const RestauranteCard: React.FC<RestauranteProps> = ({
  id,
  imagem,
  nome,
  nota,
  tags,
  descricao,
  destaque
}) => {
  const navigate = useNavigate();

  return (
    <Card>
      <div style={{ position: "relative" }}>
        {/* fallback para placeholder se a URL for vazia ou der erro */}
        <Imagem
          src={imagem || placeholderImg}
          alt={nome}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = placeholderImg;
          }}
        />
        <Tags>
          {destaque && <Tag>Destaque da semana</Tag>}
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </div>
      <Conteudo>
        <Titulo>
          {nome}
          <Nota>
            {nota}
            <img
              src={estrelaImg}
              alt="estrela"
              style={{ width: 16, height: 16, marginLeft: 4 }}
            />
          </Nota>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Botao
          onClick={() => {
            // navega para /perfil e envia o id no state (Perfil pode ler location.state)
            navigate("/perfil", { state: { id } });
          }}
        >
          Saiba mais
        </Botao>
      </Conteudo>
    </Card>
  );
};

export default RestauranteCard;