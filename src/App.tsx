import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { RestaurantList } from "./components/RestaurantList";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { RestaurantProfile } from "./components/RestaurantProfile";

const PageOuter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-page);
`;

/* painel central com largura fixa e padding consistente */
const Panel = styled.div`
  width: 100%;
  max-width: 980px;
  background: var(--panel-bg);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 28px rgba(14, 25, 40, 0.06);
  margin: 24px 0;
`;

/* conteúdo interno com padding alinhado ao Figma e responsivo */
const MainInner = styled.main`
  padding: 28px 34px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 840px) {
    padding: 20px;
  }
`;

/* simples roteamento por hash para manter SPA sem dependências */
function useHashRoute() {
  const [route, setRoute] = useState(location.hash || "#");

  useEffect(() => {
    const handler = () => setRoute(location.hash || "#");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return route;
}

function App() {
  const route = useHashRoute();
  const isProfile = route.startsWith("#/restaurant/");

  return (
    <PageOuter>
      <GlobalStyle />
      <Panel role="application" aria-label="Painel principal">
        <Header />
        <MainInner>
          {isProfile ? <RestaurantProfile /> : <RestaurantList />}
        </MainInner>
        <Footer />
      </Panel>
    </PageOuter>
  );
}

export default App;
