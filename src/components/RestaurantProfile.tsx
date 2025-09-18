import React, { useEffect, useState } from "react";
import styled from "styled-components";
import massaImg from "../assets/massa.png";
import pizzaImg from "../assets/pizza.png";
import { ProductModal } from "./ProductModal";
import { PurchaseModal } from "./PurchaseModal";

/* perfil agora apenas conteúdo — Header/Footer renderizados por App.tsx */
const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

/* hero alinhado ao topo interno */
const Hero = styled.header`
  position: relative;
  height: 160px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 18px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  padding: 12px 18px;
`;

const HeroOverlay = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
  padding: 8px 12px;
  color: #fff;
`;

const RestaurantTitle = styled.h1`
  font-size: 1.1rem;
  margin: 0;
`;

/* descrição curta */
const Intro = styled.p`
  margin: 12px 0 18px;
  color: var(--muted);
  line-height: 1.4;
`;

/* grid de produtos: responsivo para 3 / 2 / 1 colunas */
const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* product card (clicável para abrir modal) */
const ProductCard = styled.article`
  background: #fff;
  border: 1px solid var(--card-border);
  padding: 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(14, 25, 40, 0.06);
  }
  &:focus {
    outline: 3px solid rgba(214, 91, 89, 0.16);
  }
`;

/* thumb com margem e borda */
const ProductThumb = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ProductName = styled.h2`
  font-size: 0.95rem;
  color: #b94141;
  margin: 0 0 6px 0;
`;

const ProductDesc = styled.p`
  font-size: 0.85rem;
  color: var(--muted);
  flex: 1;
  margin: 0 0 8px;
  line-height: 1.25;
`;

const AddButton = styled.button`
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;

  &:hover {
    filter: brightness(0.98);
  }
`;

const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 12px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
};

export const RestaurantProfile: React.FC = () => {
  const [restaurant, setRestaurant] = useState<any | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [purchaseProduct, setPurchaseProduct] = useState<Product | null>(null);

  // Pega o id do hash (ex: #/restaurant/2)
  const getRestaurantIdFromHash = () => {
    const m = location.hash.match(/#\/restaurant\/(\d+)/);
    return m ? Number(m[1]) : null;
  };

  useEffect(() => {
    let mounted = true;
    async function load() {
      const id = getRestaurantIdFromHash() ?? 2;
      try {
        const res = await fetch(
          "https://ebac-fake-api.vercel.app/api/efood/restaurantes"
        );
        const data = await res.json();
        if (!mounted) return;
        const found =
          (data || []).find(
            (r: any) => Number(r.id) === Number(id) || String(r.id) === String(id)
          ) || null;
        if (found) {
          setRestaurant(found);
          // mapeia produtos (API pode ter formatos diferentes)
          const prods =
            (found.produtos || found.products || []).map((p: any, idx: number) => ({
              id: p.id ?? idx + 1,
              name: p.nome ?? p.name ?? `Produto ${idx + 1}`,
              desc: p.descricao ?? p.description ?? "",
              price:
                typeof p.preco === "number"
                  ? `R$ ${p.preco.toFixed(2).replace(".", ",")}`
                  : p.preco ?? p.price ?? "R$ 0,00",
              image: p.foto ?? p.imagem ?? p.image ?? pizzaImg,
            })) || [];
          if (prods.length === 0) {
            // fallback simples
            setProducts([
              { id: 1, name: "Pizza Margherita", desc: "Massa fina...", price: "R$ 34,90", image: pizzaImg },
              { id: 2, name: "Pizza Calabresa", desc: "Calabresa fatiada...", price: "R$ 38,50", image: pizzaImg },
            ]);
          } else {
            setProducts(prods);
          }
        } else {
          // fallback se não encontrar
          setRestaurant({ nome: "La Dolce Vita Trattoria", imagem: massaImg });
          setProducts([
            { id: 1, name: "Pizza Margherita", desc: "Massa fina...", price: "R$ 34,90", image: pizzaImg },
            { id: 2, name: "Pizza Calabresa", desc: "Calabresa fatiada...", price: "R$ 38,50", image: pizzaImg },
          ]);
        }
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [location.hash]);

  function openModal(p: Product) {
    setSelected(p);
    history.pushState(null, "", `#/restaurant/${getRestaurantIdFromHash() ?? 2}/product/${p.id}`);
  }

  function closeModal() {
    setSelected(null);
    history.pushState(null, "", `#/restaurant/${getRestaurantIdFromHash() ?? 2}`);
  }

  function handleAddFromModal(p: Product) {
    // abre modal de compra
    setPurchaseProduct(p);
  }

  function closePurchase() {
    setPurchaseProduct(null);
  }

  function handleConfirmPurchase(p: Product, qty: number) {
    // aqui você integraria com o carrinho/serviço
    console.info("Compra confirmada:", p, "quantidade:", qty);
    closePurchase();
  }

  // hero background usa imagem do restaurante se disponível
  const heroBg = restaurant?.imagem || restaurant?.foto || massaImg;

  return (
    <Container aria-label="Perfil do restaurante">
      <BackLink href="#" aria-label="Voltar para lista">← Voltar</BackLink>

      <Hero style={{ backgroundImage: `url(${heroBg})` }} role="img" aria-label="Imagem da La Dolce Vita">
        <HeroOverlay>
          <RestaurantTitle>{restaurant?.nome ?? "Restaurante"}</RestaurantTitle>
        </HeroOverlay>
      </Hero>

      <Intro>
        {restaurant?.descricao ?? "Descrição do restaurante."}
      </Intro>

      <Grid aria-label="Produtos do restaurante">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            role="button"
            tabIndex={0}
            onClick={() => openModal(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter") openModal(p);
            }}
            aria-describedby={`product-${p.id}-desc`}
          >
            <ProductThumb src={p.image} alt={p.name} />
            <ProductName>{p.name}</ProductName>
            <ProductDesc id={`product-${p.id}-desc`}>{p.desc}</ProductDesc>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <small style={{ color: "#b94141", fontWeight: 700 }}>{p.price}</small>
              <AddButton
                onClick={(ev) => {
                  ev.stopPropagation();
                  // abrir modal de compra diretamente
                  setPurchaseProduct(p);
                }}
                aria-label={`Comprar ${p.name}`}
              >
                Comprar
              </AddButton>
            </div>
          </ProductCard>
        ))}
      </Grid>

      <ProductModal product={selected} onClose={closeModal} onAdd={(p) => handleAddFromModal(p)} />

      <PurchaseModal
        product={purchaseProduct}
        onClose={closePurchase}
        onConfirm={(p, qty) => handleConfirmPurchase(p, qty)}
      />
    </Container>
  );
};