import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  description: string;
  rating: number;
  image: string;
  type: string;
}

const Card = styled.article`
  position: relative;
  border: 1px solid #f2bfb9;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  min-height: 320px;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
`;

/* conteúdo do card com espaçamento reduzido para encaixar mais itens na grid */
const Content = styled.div`
  padding: 0.9rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: #e74c3c;
  margin-top: 0.35rem;
`;

const Desc = styled.p`
  font-size: 0.85rem;
  margin: 0.5rem 0 0.75rem;
  color: #6b6b6b;
  line-height: 1.2;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e74c3c;
  color: #fff;
  font-size: 0.65rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  z-index: 2;
`;

const Rating = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 700;
  color: #f39c12;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`;

const Button = styled.button`
  background-color: #fff;
  color: #e74c3c;
  border: 1px solid #f2bfb9;
  padding: 0.45rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  width: 120px;
  margin-top: auto;
  font-size: 0.85rem;

  &:hover {
    background-color: #ffecec;
  }
`;

export const RestaurantCard: React.FC<Props> = ({
  name,
  description,
  rating,
  image,
  type,
}) => {
  return (
    <Card>
      <Badge>{type}</Badge>
      <Rating>★ {rating}</Rating>
      <Image src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Desc>{description}</Desc>
        <Button>Saiba mais</Button>
      </Content>
    </Card>
  );
};
