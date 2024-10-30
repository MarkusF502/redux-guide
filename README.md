# Markus Redux-Shopping

**Markus Redux-Shopping** é uma loja fictícia de camisetas de jogadores de futebol que mereciam a Bola de Ouro em anos específicos, desenvolvida com foco no estudo de Redux. Os preços das camisetas fazem referência ao ano em que o jogador se destacou.

## 📌 Funcionalidades

- **Exibição de Produtos**: Os produtos são carregados de um arquivo `products.js`, localizado na pasta `data`, e exibidos em uma lista com informações sobre o jogador, o ano de destaque e o preço.
- **Carrinho de Compras**: 
  - Adicionar produtos ao carrinho com um simples clique.
  - Aumentar e diminuir a quantidade de cada item no carrinho.
  - Remover itens do carrinho.

## 🚀 Tecnologias Utilizadas

- **React**: para a estrutura da aplicação e componentes.
- **Redux**: para o gerenciamento de estado global, facilitando o compartilhamento de dados entre componentes.
- **React-Redux Hooks**: 
  - `useSelector`: para acessar o estado do Redux e trazer informações ao componente.
  - `useDispatch`: para disparar actions que atualizam o estado com base nas interações do usuário.

## 📂 Estrutura de Dados

Os produtos estão organizados em um arquivo `products.js`, dentro da pasta `data`. Esse arquivo contém um array de objetos, onde cada objeto representa uma camiseta, com propriedades como `id`, `nome`, `ano`, e `preço`.

## 📖 Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/MarkusF502/redux-guide
   cd markus-redux-shopping
2. Instale as dependências:
   ```bash
   npm install
3. Execute o projeto:
   ```bash
   npm start


## 🎯 Aprendizado com Redux
Este projeto destaca o uso de Redux para o gerenciamento de estado global em um cenário de e-commerce. Foram aplicados hooks como useSelector para acessar o estado entre diferentes componentes, além de useDispatch para enviar actions, gerenciando ações do carrinho de compras.

## 📄 Licença
Este projeto é de uso pessoal e estudo.
