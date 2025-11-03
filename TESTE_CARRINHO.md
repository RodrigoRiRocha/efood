# 🧪 Guia de Teste - Carrinho de Compras

## Como testar todas as funcionalidades

### 1️⃣ Testar adição de produtos
1. Acesse http://localhost:5174/
2. Clique em qualquer restaurante (botão "Saiba mais")
3. Na página do restaurante, clique em qualquer prato
4. No modal que abrir, clique em "Adicionar ao carrinho"
5. ✅ **Verificar**: O carrinho deve abrir automaticamente do lado direito
6. ✅ **Verificar**: O produto aparece na lista com imagem, nome e preço
7. ✅ **Verificar**: O contador no header mostra "1 produto(s) no carrinho"

### 2️⃣ Testar adição de múltiplos produtos
1. Feche o carrinho (clique fora dele)
2. Adicione outro produto diferente
3. ✅ **Verificar**: Agora o carrinho tem 2 itens
4. ✅ **Verificar**: O contador mostra "2 produto(s) no carrinho"
5. Adicione o MESMO produto novamente
6. ✅ **Verificar**: A quantidade do item incrementa
7. ✅ **Verificar**: Aparece "Quantidade: 2" no item

### 3️⃣ Testar cálculo do total
1. Abra o carrinho
2. Role até o final
3. ✅ **Verificar**: Veja a seção "Valor total"
4. ✅ **Verificar**: O valor é a soma de todos os produtos × quantidades
5. Exemplo:
   - Pizza Margherita (R$ 59,90) x2 = R$ 119,80
   - Spaghetti Carbonara (R$ 49,90) x1 = R$ 49,90
   - **Total: R$ 169,70**

### 4️⃣ Testar remoção de produtos
1. No carrinho, encontre o botão X em cada item
2. Clique no X de um produto
3. ✅ **Verificar**: O item desaparece imediatamente
4. ✅ **Verificar**: O total é recalculado automaticamente
5. ✅ **Verificar**: O contador no header diminui
6. Remova todos os produtos
7. ✅ **Verificar**: Aparece a mensagem "O carrinho está vazio..."

### 5️⃣ Testar abertura/fechamento do carrinho
1. Adicione pelo menos 1 produto
2. Clique FORA do carrinho (no overlay escuro)
3. ✅ **Verificar**: O carrinho fecha
4. Clique em "X produto(s) no carrinho" no header
5. ✅ **Verificar**: O carrinho abre novamente
6. Clique novamente no texto do header
7. ✅ **Verificar**: O carrinho fecha

### 6️⃣ Testar persistência durante navegação
1. Adicione 3 produtos ao carrinho
2. Feche o carrinho
3. Volte para a home (clique em "Restaurantes")
4. Entre em OUTRO restaurante
5. ✅ **Verificar**: O contador no header ainda mostra "3 produto(s)"
6. Abra o carrinho
7. ✅ **Verificar**: Os 3 produtos ainda estão lá

### 7️⃣ Testar responsividade
1. Abra as ferramentas do desenvolvedor (F12)
2. Ative o modo responsivo (Ctrl + Shift + M)
3. Teste em diferentes tamanhos:
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)
4. ✅ **Verificar**: O carrinho se ajusta corretamente

## 🎯 Checklist de Funcionalidades

- [ ] Adicionar produto abre o carrinho automaticamente
- [ ] Produtos aparecem com imagem, nome e preço
- [ ] Quantidade incrementa ao adicionar produto repetido
- [ ] Contador no header atualiza em tempo real
- [ ] Total é calculado corretamente (preço × quantidade)
- [ ] Botão X remove o produto
- [ ] Total recalcula ao remover produto
- [ ] Carrinho vazio mostra mensagem apropriada
- [ ] Clicar fora fecha o carrinho
- [ ] Clicar no contador abre/fecha o carrinho
- [ ] Produtos permanecem ao navegar entre páginas
- [ ] Layout responsivo funciona em mobile

## 🐛 Possíveis problemas e soluções

### Problema: "Carrinho não abre"
**Solução**: Verifique se o Redux Provider está no main.tsx

### Problema: "Produtos não aparecem no carrinho"
**Solução**: Verifique se o produto tem `preco` (número) definido

### Problema: "Total está errado"
**Solução**: Verifique se todos os produtos têm preço numérico válido

### Problema: "Contador não atualiza"
**Solução**: Verifique se o Header está usando `useAppSelector(selectCartItemsCount)`

## 📊 Dados de teste disponíveis

Restaurantes mockados com produtos:
1. **Hioki Sushi** - Japonesa (R$ 45,90 - R$ 89,90)
2. **La Dolce Vita** - Italiana (R$ 49,90 - R$ 59,90)
3. **Burger House** - Americana (R$ 35,90)
4. **Cantina do Nonno** - Italiana (R$ 54,90)
5. **Thai Spice** - Tailandesa (R$ 42,90)
6. **Boi na Brasa** - Brasileira (R$ 79,90)

## 🎨 Verificação visual

### Cores corretas:
- Sidebar: Vermelho `#E66767`
- Itens: Bege `#FFEBD9`
- Textos nos itens: Vermelho `#E66767`
- Overlay: Preto semi-transparente

### Layout correto:
- Carrinho abre da DIREITA para esquerda
- Largura: 360px
- Itens têm imagem 80x80 à esquerda
- Botão X no canto inferior direito de cada item
- Total e botão fixos no final

---

**Boa sorte nos testes! 🚀**
