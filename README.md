
## Funções:
  store/cart.js 
  Actions: 
  - addProduct(product) -> função que adiciona produtos ao carrinho de compras. 
  - deleteProduct(productId) -> função que deleta o produto do carrinho de compras;
  - increment(productId) -> função que aumenta a quantidade de produtos do carrinho
  - decrement(productId) -> função que diminui a quantidade de produtos do carrinho

  Getters: 
  - cartItemsCount -> monitora a quantidade de itens do carrinho
  - totalAmount -> calcula o total a pagar baseado na quantidade de produtos do carrinho. 


## Componentes
### ShoppingCartItem
### ShoppingCart
### SummaryCart
### CategoryOptions
### LeftMenu
### OrderOptions
### ProductCard
### ProductList
### TopBar

## Pages

- / Home: -> Com todos os produtos e suas categorias, inclusive com os filtros;

- /Cart -> Conteúdo do carrinho de compras. Nesta seção é possivel adicionar , remover, aumentar e diminuir a quantidade de produtos. Além de visualizar o resumo da
com o valor total da compra.

- /About -> Sobre a loja

## Instalación

```sh
npm install
```

### Compile + Hot-Reload (Desarrollo)

```sh
npm run dev
```

### Type-Check, Compile and Minify (Producción)

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
