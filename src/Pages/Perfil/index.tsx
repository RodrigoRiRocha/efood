import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PerfilHeader from "./Header";
import Apresentacao from "./Apresentacao";
import Produtos from "./Produtos";
import FooterPerfil from "./Footer_Perfil";
import Cart from "../../components/Cart";
import restaurantesData from "../../data/restaurantes.json";

const Container = styled.div`
  background-color: var(--cor-fundo-pagina);
  min-height: 100vh;
`;

const Perfil: React.FC = () => {
  const location = useLocation();
  const passedId = (location.state as any)?.id;
  const [restaurant, setRestaurant] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    
    const load = async () => {
      try {
        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        if (Array.isArray(data)) {
          if (passedId != null) {
            const found = data.find((r: any) => String(r.id) === String(passedId));
            setRestaurant(found ?? data[0] ?? null);
          } else {
            setRestaurant(data[0] ?? null);
          }
        }
      } catch (err) {
        console.error("Erro ao carregar restaurante:", err);
        // Fallback para dados locais
        if (mounted) {
          const data = restaurantesData;
          if (Array.isArray(data)) {
            if (passedId != null) {
              const found = data.find((r: any) => String(r.id) === String(passedId));
              setRestaurant(found ?? data[0] ?? null);
            } else {
              setRestaurant(data[0] ?? null);
            }
          }
        }
      }
    };
    load();
    
    return () => {
      mounted = false;
    };
  }, [passedId]);

  return (
    <Container>
      <PerfilHeader />
      <Apresentacao restaurant={restaurant} />
      <Produtos restaurant={restaurant} />
      <FooterPerfil />
      <Cart />
    </Container>
  );
};

export default Perfil;