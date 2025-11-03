# 🛒 Implementação do Carrinho de Compras - efood

## ✅ O que foi implementado

### 1. **Redux Toolkit** para gerenciamento de estado
- ✅ Instalado `@reduxjs/toolkit` e `react-redux`
- ✅ Configurado Redux Store em `src/store/index.ts`
- ✅ Criado Cart Slice com todas as actions necessárias
- ✅ Provider configurado no `main.tsx`

### 2. **Cart Slice** (`src/store/cartSlice.ts`)
Ações disponíveis:
- `addItem` - Adiciona produto ao carrinho (incrementa quantidade se já existir)
- `removeItem` - Remove produto do carrinho
- `decreaseQuantity` - Diminui quantidade (remove se chegar a 0)
- `clearCart` - Limpa todo o carrinho
- `toggleCart` - Abre/fecha o carrinho
- `openCart` - Abre o carrinho
- `closeCart` - Fecha o carrinho

Selectors disponíveis:
- `selectCartItems` - Lista de itens no carrinho
- `selectCartIsOpen` - Estado de abertura do carrinho
- `selectCartTotal` - **Soma total dos produtos** (preço × quantidade)
- `selectCartItemsCount` - Quantidade total de itens

### 3. **Componente Cart** (`src/components/Cart/`)
- ✅ Sidebar lateral que aparece do lado direito
- ✅ Design baseado no Figma com cores #E66767 e #FFEBD9
- ✅ Lista todos os produtos adicionados
- ✅ Mostra imagem, nome, preço e quantidade de cada item
- ✅ Botão para remover itens
- ✅ **Cálculo automático do valor total da compra**
- ✅ Botão "Continuar com a entrega"
- ✅ Mensagem quando o carrinho está vazio
- ✅ Overlay escuro com fechamento ao clicar fora
- ✅ Responsivo para mobile

### 4. **Integração com os componentes existentes**

#### ProductModal (`src/components/ProductModal/index.tsx`)
- ✅ Ao clicar em "Adicionar ao carrinho", dispara a action `addItem`
- ✅ Abre automaticamente o carrinho após adicionar
- ✅ Fecha o modal automaticamente

#### Header do Perfil (`src/Pages/Perfil/Header/index.tsx`)
- ✅ Mostra contador dinâmico: "X produto(s) no carrinho"
- ✅ Clicável para abrir/fechar o carrinho
- ✅ Atualiza em tempo real

#### Página Perfil (`src/Pages/Perfil/index.tsx`)
- ✅ Componente Cart renderizado
- ✅ Integrado com o Redux

### 5. **Cálculo do Total**
O valor total é calculado automaticamente através do selector `selectCartTotal`:
```typescript
selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => 
    total + item.preco * item.quantity, 0
  );
```

Formatado em moeda brasileira:
```
R$ 149,70
```

## 🎨 Layout seguindo o Figma

### Cores utilizadas:
- **Background do sidebar**: `#E66767` (vermelho principal)
- **Background dos itens**: `#FFEBD9` (bege claro)
- **Textos**: `#E66767` para títulos, `#FFEBD9` para textos no fundo vermelho
- **Overlay**: `rgba(0, 0, 0, 0.8)`

### Estrutura:
```
┌─────────────────────────────┐
│  [Overlay escuro]           │
│                             │
│  ┌──────────────────────┐  │
│  │  SIDEBAR CARRINHO    │  │
│  │  (360px width)       │  │
│  │                      │  │
│  │  [Item 1]            │  │
│  │  [Item 2]            │  │
│  │  ...                 │  │
│  │                      │  │
│  │  Valor total: R$ XX  │  │
│  │  [Continuar]         │  │
│  └──────────────────────┘  │
└─────────────────────────────┘
```

## 🚀 Como usar

### Adicionar produto ao carrinho:
1. Navegue até a página de um restaurante (`/perfil`)
2. Clique em qualquer produto
3. No modal, clique em "Adicionar ao carrinho"
4. O carrinho abrirá automaticamente

### Ver o carrinho:
- Clique em "X produto(s) no carrinho" no header
- O carrinho aparecerá do lado direito

### Remover produto:
- Clique no ícone X em cada item do carrinho

### Fechar o carrinho:
- Clique fora do sidebar
- Ou clique novamente em "X produto(s) no carrinho"

## 📁 Arquivos criados/modificados

### Novos arquivos:
- `src/store/index.ts` - Configuração do Redux Store
- `src/store/cartSlice.ts` - Lógica do carrinho
- `src/store/hooks.ts` - Hooks tipados do Redux
- `src/components/Cart/index.tsx` - Componente do carrinho
- `src/components/Cart/styles.ts` - Estilos do carrinho
- `src/data/restaurantes.json` - Dados mockados (solução para API offline)

### Arquivos modificados:
- `src/main.tsx` - Adicionado Provider do Redux
- `src/Pages/Perfil/index.tsx` - Adicionado componente Cart
- `src/Pages/Perfil/Header/index.tsx` - Integrado contador e toggle
- `src/components/ProductModal/index.tsx` - Integrado Redux
- `src/Pages/Perfil/Produtos/index.tsx` - Ajustado para Redux
- `tsconfig.app.json` - Adicionado `resolveJsonModule`

## 🐛 Soluções aplicadas

### Problema 1: API offline
**Erro**: `Payment required DEPLOYMENT_DISABLED`

**Solução**: Criado arquivo `restaurantes.json` com dados mockados locais incluindo 6 restaurantes com cardápios completos.

### Problema 2: TypeScript com imports JSON
**Solução**: Adicionado `"resolveJsonModule": true` no `tsconfig.app.json`

### Problema 3: Importação circular no Redux
**Solução**: Usado `any` nos selectors para evitar dependência circular entre store e slice

## 🎯 Requisitos atendidos

✅ **1. Layout baseado no Figma** - Design fiel ao protótipo  
✅ **2. Página do carrinho** - Sidebar lateral funcional  
✅ **3. Redux implementado** - Store configurado com todas as actions  
✅ **4. Cálculo do valor total** - Soma automática: preço × quantidade  
✅ **5. Adicionar/remover produtos** - Funcionalidade completa  
✅ **6. Contador no header** - Atualização em tempo real  

## 🏃‍♂️ Executar o projeto

```bash
npm run dev
```

Acesse: http://localhost:5174/

## 📝 Próximos passos (sugestões)

- [ ] Implementar página de checkout (formulário de entrega)
- [ ] Adicionar validação de formulário
- [ ] Integrar com API de pagamento
- [ ] Persistir carrinho no localStorage
- [ ] Adicionar animações de transição
- [ ] Toast notifications ao adicionar/remover produtos
- [ ] Implementar cupons de desconto

---

**Desenvolvido com ❤️ usando React + TypeScript + Redux Toolkit + Styled Components**
