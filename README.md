# API-Marvel-Back

Projeto entregue durante o curso Starter da [Growdev](https://www.growdev.com.br/).
Trata-se de uma aplicação front-end que consome uma API desenvolvida pelo aluno que,
por sua vez, consume a [API da Marvel](https://developer.marvel.com/) - trazendo
dados dos personagens.

Este repositório é o back-end da aplicação, construído utilizando a estrutura de
MVC.

##  :rocket: Funcionalidades

* Rota de **listagem** (index), que utiliza parâmetros de filtro de paginação.
* Rota de **detalhes** (show), a qual recebe como parâmetro o nome do personagem.
* Rota de **log**, que retorna a lista de todas as requisições recebidas.

## Tecnologias

Node.js, Express, Axios, ESLint, Prettier, Nodemon

## :construction_worker: Como rodar

- Clonar o repo
- Instalar as dependências
```
yarn
```
- Rodar a aplicação
```
yarn dev
```
- A API da Marvel requer autenticação. Para saber quais informações são necessárias,
o [vídeo](https://www.youtube.com/watch?v=kHjnnEBVgw4&t=334s&ab_channel=SouProgramador)
do canal **Sou Programador**.
