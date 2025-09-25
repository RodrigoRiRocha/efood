import React from "react";
import * as S from "./styles";
import banner from "../../../assets/banner.png";

interface Props {
  restaurant?: any | null;
}

const Apresentacao: React.FC<Props> = ({ restaurant }) => {
  const background = restaurant?.capa ?? banner;
  const categoria = restaurant?.tipo ?? "Restaurante";
  const titulo = restaurant?.titulo ?? "La Dolce Vita Trattoria";

  return (
    <S.Container background={background}>
      <S.Overlay />
      <S.Content>
        <S.Category>{categoria}</S.Category>
        <S.Title>{titulo}</S.Title>
      </S.Content>
    </S.Container>
  );
};

export default Apresentacao;