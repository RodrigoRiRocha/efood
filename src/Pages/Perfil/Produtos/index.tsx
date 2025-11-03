import React, { useState } from "react";
import * as S from "./styles";
import ProductModal from "../../../components/ProductModal";
import placeholderImg from "../../../assets/pizza.png";

interface MenuItem {
  id: number | string;
  nome: string;
  descricao?: string;
  foto?: string;
  preco?: number;
  porcao?: string;
}

interface Props {
  restaurant?: any | null;
}

const API_BASE = "https://ebac-fake-api.vercel.app";

const normalizeImage = (img?: string) => {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/")) return `${API_BASE}${img}`;
  return `${API_BASE}/${img}`;
};

const Produtos: React.FC<Props> = ({ restaurant }) => {
  // se houver restaurant, usa o cardápio; senão usa um fallback vazio
  const items: MenuItem[] =
    (restaurant?.cardapio && Array.isArray(restaurant.cardapio)
      ? restaurant.cardapio
      : []).map((it: any) => ({
        id: it.id,
        nome: it.nome,
        descricao: it.descricao,
        foto: it.foto,
        preco: it.preco,
        porcao: it.porcao,
      }));

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<any | null>(null);

  function handleOpen(item: any) {
    setActive(item);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setActive(null);
  }

  // se não houver items, mostra mensagem
  if (!restaurant) {
    return (
      <S.Wrapper>
        <div style={{ padding: 40, textAlign: "center" }}>
          Carregando restaurante...
        </div>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Grid>
        {items.map((item) => (
          <S.Card key={item.id} onClick={() => handleOpen(item)}>
            <S.Image
              src={normalizeImage(item.foto) || placeholderImg}
              alt={item.nome}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = placeholderImg;
              }}
            />
            <S.CardContent>
              <S.Title>{item.nome}</S.Title>
              <S.Desc>{item.descricao}</S.Desc>
              <S.AddButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(item);
                }}
              >
                Adicionar ao carrinho {item.preco ? `- R$ ${item.preco}` : ""}
              </S.AddButton>
            </S.CardContent>
          </S.Card>
        ))}
      </S.Grid>

      <ProductModal
        open={open}
        product={{
          id: active?.id,
          title: active?.nome ?? "",
          desc: active?.descricao ?? "",
          image: normalizeImage(active?.foto) || placeholderImg,
          price: active?.preco ? `R$ ${active.preco.toFixed(2)}` : undefined,
          priceValue: active?.preco,
        }}
        onClose={handleClose}
      />
    </S.Wrapper>
  );
};

export default Produtos;