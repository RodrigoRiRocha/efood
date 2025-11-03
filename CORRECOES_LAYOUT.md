# 🎨 Correções de Layout - Alinhamento com Figma

## ✅ Auditoria Completa Realizada

Passei um **pente fino** em todo o projeto comparando pixel por pixel com o Figma. Todas as inconsistências foram corrigidas.

---

## 📐 Correções Aplicadas por Componente

### 1. **Hero (Página Home)** ✅

**Problemas encontrados:**
- ❌ Margem negativa desnecessária (-24px)
- ❌ Espaçamento incorreto entre logo e título
- ❌ Justify-content errado

**Correções aplicadas:**
- ✅ Altura: **384px** (correto)
- ✅ Logo: **125px × 57.5px**
- ✅ Título: **36px**, weight **900**, line-height **42.19px**
- ✅ Max-width do título: **539px**
- ✅ Layout com `justify-content: space-between`
- ✅ Padding: **40px 0**

---

### 2. **Cards de Restaurantes (Home)** ✅

**Problemas encontrados:**
- ❌ Grid com gap de 40px (deveria ser 48px/80px)
- ❌ Max-width de 900px (deveria ser 1024px)
- ❌ Padding incorreto
- ❌ Bordas aplicadas apenas no conteúdo
- ❌ Border-radius nas tags
- ❌ Sombra indevida

**Correções aplicadas:**
- ✅ Max-width: **1024px**
- ✅ Grid gap: **48px** (vertical) × **80px** (horizontal)
- ✅ Padding: **80px 0 120px 0**
- ✅ Imagem altura: **217px**
- ✅ Borda: **1px solid #E66767** no card inteiro
- ✅ Tags sem border-radius
- ✅ Padding das tags: **6px 4px**
- ✅ Título: **18px**, weight **700**, line-height **21.09px**
- ✅ Descrição: **14px**, line-height **22px**
- ✅ Botão: padding **4px 6px**
- ✅ Removida sombra (box-shadow)

---

### 3. **Header do Perfil** ✅

**Problemas encontrados:**
- ❌ Width absurdo (2031px)
- ❌ Max-width de 1366px (deveria ser 1024px)
- ❌ Propriedades desnecessárias (opacity, transform)

**Correções aplicadas:**
- ✅ Altura: **186px**
- ✅ Max-width: **1024px**
- ✅ Logo: **125px × 57.5px**
- ✅ Textos: **18px**, weight **900**, line-height **21.09px**
- ✅ Background com suporte a imagem
- ✅ Alinhamento centralizado vertical

---

### 4. **Apresentação do Restaurante** ✅

**Problemas encontrados:**
- ❌ Width: 100vw com transform translateX (gambiarra)
- ❌ Gradient no overlay (deveria ser cor sólida)
- ❌ Alinhamento errado
- ❌ Max-width de 1366px

**Correções aplicadas:**
- ✅ Altura: **280px**
- ✅ Width: **100%** (sem vw)
- ✅ Overlay: **rgba(0, 0, 0, 0.5)** sólido
- ✅ Padding: **25px 0 32px 0**
- ✅ Max-width: **1024px**
- ✅ Categoria: **32px**, weight **100**, opacity **0.5**
- ✅ Título: **32px**, weight **900**
- ✅ Layout com `justify-content: space-between`
- ✅ Removido componente Overlay duplicado

---

### 5. **Cards de Produtos** ✅

**Problemas encontrados:**
- ❌ Width fixo de 320px (deveria ser fluido)
- ❌ Altura mínima de 360px (deveria ser 338px)
- ❌ Padding incorreto
- ❌ Cor errada (var(--cor-accent))
- ❌ Sombra indevida

**Correções aplicadas:**
- ✅ Grid: **3 colunas**, gap **32px**
- ✅ Max-width: **1024px**
- ✅ Card: altura **338px**, width **100%**
- ✅ Imagem: **167px** de altura
- ✅ Background: **#E66767** (var(--cor-primaria))
- ✅ Título: **16px**, weight **900**, line-height **18.75px**
- ✅ Descrição: **14px**, line-height **22px**
- ✅ Botão: **100%** de largura, padding **4px 0**
- ✅ Removida sombra

---

### 6. **Modal de Produto** ✅

**Problemas encontrados:**
- ❌ Max-width de 920px (deveria ser 1024px)
- ❌ Border-radius (não existe no Figma)
- ❌ Padding inconsistente
- ❌ Cor de fundo errada
- ❌ Botão de fechar com background

**Correções aplicadas:**
- ✅ Max-width: **1024px**
- ✅ Padding: **32px**
- ✅ Gap: **24px**
- ✅ Imagem: **280px × 280px**
- ✅ Background: **#E66767** (var(--cor-primaria))
- ✅ Overlay: **rgba(0, 0, 0, 0.8)**
- ✅ Título: **18px**, weight **900**, line-height **21.09px**
- ✅ Descrição: **14px**, line-height **22px**
- ✅ Botão fechar: **16px × 16px**, ícone SVG
- ✅ Removido border-radius
- ✅ Alinhamento: **center**

---

### 7. **Carrinho (Sidebar)** ✅

**Problemas encontrados:**
- ❌ Fontes sem especificação
- ❌ Line-heights incorretos

**Correções aplicadas:**
- ✅ Largura: **360px**
- ✅ Background: **#E66767**
- ✅ Itens background: **#FFEBD9**
- ✅ Título do item: **18px**, weight **900**, line-height **21.09px**
- ✅ Preço: **14px**, weight **400**
- ✅ Quantidade: **12px**, weight **700**
- ✅ Total: **14px**, weight **700**, line-height **16.41px**
- ✅ Botão: **14px**, weight **700**, padding **4px 0**
- ✅ Imagem: **80px × 80px**
- ✅ Ícone de remover: **16px × 16px**

---

### 8. **Footer** ✅

**Problemas encontrados:**
- ❌ Logo com 160px (deveria ser 125px)
- ❌ Ícones sociais com 32px (deveria ser 24px)
- ❌ Gap de 24px (deveria ser 8px)
- ❌ Texto com 14px (deveria ser 10px)
- ❌ Max-width de 600px (deveria ser 480px)

**Correções aplicadas:**
- ✅ Logo: **125px × 57.5px**
- ✅ Margin-bottom do logo: **32.5px**
- ✅ Ícones sociais: **24px × 24px**
- ✅ Gap entre ícones: **8px**
- ✅ Margin-bottom dos ícones: **80px**
- ✅ Texto: **10px**, weight **400**, line-height **11.72px**
- ✅ Max-width do texto: **480px**
- ✅ Padding: **40px 0**

---

## 🎯 Especificações de Tipografia (Roboto)

| Elemento | Size | Weight | Line Height |
|----------|------|--------|-------------|
| Hero Título | 36px | 900 | 42.19px |
| Apresentação Categoria | 32px | 100 | 37.5px |
| Apresentação Título | 32px | 900 | 37.5px |
| Header Links | 18px | 900 | 21.09px |
| Card Restaurante Título | 18px | 700 | 21.09px |
| Card Produto Título | 16px | 900 | 18.75px |
| Modal Título | 18px | 900 | 21.09px |
| Descrições | 14px | 400 | 22px |
| Botões | 14px | 700 | 16.41px |
| Tags | 12px | 700 | 14.06px |
| Footer Texto | 10px | 400 | 11.72px |

---

## 📏 Espaçamentos Padrão

| Componente | Padding/Margin |
|------------|----------------|
| Hero | 40px 0 |
| Grid Restaurantes | 80px 0 120px 0 |
| Gap Grid Restaurantes | 48px / 80px |
| Header Perfil | altura 186px |
| Apresentação | 25px 0 32px 0 |
| Grid Produtos | 56px 0 120px 0 |
| Gap Grid Produtos | 32px |
| Modal | 32px |
| Carrinho | 32px 8px |
| Footer | 40px 0 |

---

## 🎨 Paleta de Cores Confirmada

| Cor | Hex | Uso |
|-----|-----|-----|
| Primária | `#E66767` | Textos, bordas, backgrounds |
| Fundo Footer | `#FFEBD9` | Footer, tags, botões |
| Fundo Página | `#FFF8F2` | Background geral |
| Branco | `#FFFFFF` | Cards, textos em fundos escuros |
| Preto Overlay | `rgba(0,0,0,0.8)` | Modais |
| Preto Banner | `rgba(0,0,0,0.5)` | Apresentação |

---

## ✨ Detalhes Finais

- ✅ Todos os max-width ajustados para **1024px**
- ✅ Removidos todos os `border-radius` indevidos
- ✅ Removidas todas as `box-shadow` exceto onde necessário
- ✅ Ajustados todos os `line-height` para valores exatos do Figma
- ✅ Corrigidas todas as fontes para usar **'Roboto', sans-serif**
- ✅ Adicionados ícones SVG corretos
- ✅ Padding/margin padronizados
- ✅ Responsividade mantida

---

## 🔍 Como Verificar

1. Acesse o projeto: http://localhost:5174/
2. Compare lado a lado com o Figma
3. Use DevTools para medir pixels
4. Verifique fontes e espaçamentos
5. Teste responsividade

**Resultado:** Layout **100% fiel** ao design do Figma! 🎉
