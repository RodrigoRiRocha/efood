import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RestaurantCard } from "./RestaurantCard";
import sushiImg from "../assets/sushi.png";
import massaImg from "../assets/massa.png";

const Section = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

type ApiRestaurant = any;

export const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<ApiRestaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(
          "https://ebac-fake-api.vercel.app/api/efood/restaurantes"
        );
        const data = await res.json();
        if (!mounted) return;
        const mapped = (data || []).map((r: any, idx: number) => ({
          id: r.id ?? idx + 1,
          name: r.nome ?? r.name ?? `Restaurante ${idx + 1}`,
          description:
            r.descricao ??
            r.description ??
            "Restaurante com pratos deliciosos.",
          rating: r.avaliacao ?? r.rating ?? 4.6,
          image: r.foto ?? r.imagem ?? (idx % 2 ? massaImg : sushiImg),
          type: r.categoria ?? r.tipo ?? "Culinária",
        }));
        setRestaurants(mapped);
      } catch (err) {
        console.error("Erro carregando restaurantes:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p>Carregando restaurantes...</p>;

  return (
    <Section aria-label="Lista de restaurantes">
      {restaurants.map((r) => {
        const card = <RestaurantCard key={r.id} {...r} />;

        // Link para o perfil do restaurante (SPA hash)
        return (
          <a
            key={r.id}
            href={`#/restaurant/${r.id}`}
            aria-label={`Abrir perfil de ${r.name}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {card}
          </a>
        );
      })}
    </Section>
  );
};
