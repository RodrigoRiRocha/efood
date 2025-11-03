import React, { useEffect, useState } from "react";
import { Grid } from "./styles";
import RestauranteCard from "../RestauranteCard";
import restaurantesData from "../../data/restaurantes.json";

interface RestauranteAPI {
  id?: number | string;
  // campos reais retornados pela API
  titulo?: string;
  capa?: string;
  avaliacao?: number;
  tipo?: string;
  destacado?: boolean;
  descricao?: string;
  cardapio?: any[];
  // campos antigos mantidos por compatibilidade (opcionais)
  nome?: string;
  imagem?: string;
  nota?: number;
  tags?: string[];
  destaque?: boolean;
}

const Listagem: React.FC = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    // OPÇÃO 1: Usar dados locais (comentar para usar API)
    setTimeout(() => {
      if (mounted) {
        setRestaurantes(restaurantesData);
        setLoading(false);
      }
    }, 500);

    // OPÇÃO 2: Tentar API externa (descomentar quando API estiver funcionando)
    /*
    const url = "https://ebac-fake-api.vercel.app/api/efood/restaurantes";

    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted && Array.isArray(data)) {
          setRestaurantes(data);
        }
      } catch (err) {
        console.error("Erro ao carregar restaurantes:", err);
        // Fallback para dados locais em caso de erro
        if (mounted) {
          setRestaurantes(restaurantesData);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    */

    return () => {
      mounted = false;
    };
  }, []);

  // base da API (usado quando a API retorna caminhos relativos)
  const API_BASE = "https://ebac-fake-api.vercel.app";

  const normalizeImage = (img?: string) => {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    if (img.startsWith("/")) return `${API_BASE}${img}`;
    return `${API_BASE}/${img}`;
  };

  if (loading)
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        Carregando restaurantes...
      </div>
    );

  return (
    <Grid>
      {restaurantes.map((restaurante, idx) => (
        <RestauranteCard
          key={restaurante.id ?? idx}
          id={restaurante.id}
          imagem={normalizeImage(restaurante.capa ?? restaurante.imagem)}
          nome={restaurante.titulo ?? restaurante.nome ?? "Restaurante"}
          nota={restaurante.avaliacao ?? restaurante.nota ?? 0}
          tags={restaurante.tipo ? [restaurante.tipo] : restaurante.tags ?? []}
          descricao={restaurante.descricao ?? ""}
          destaque={restaurante.destacado ?? restaurante.destaque ?? false}
        />
      ))}
    </Grid>
  );
};

export default Listagem;
