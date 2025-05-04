<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
## **Spotify API - NestJS**

Este é um projeto que utiliza o framework **NestJS** para consumir a API do **Spotify**. O sistema autentica-se no Spotify usando o fluxo **Client Credentials Flow**, permitindo a busca de artistas, exibição de detalhes de artistas e álbuns.

## **Arquitetura do Projeto**

Este projeto utiliza a **arquitetura modular** do **NestJS**, onde o código é organizado em **módulos**, **controladores** e **serviços**.

- **Módulos**: Organizam o código em partes, como o módulo de **Spotify**.
- **Controladores**: São responsáveis por lidar com as requisições HTTP, como buscar artistas ou álbuns.
- **Serviços**: Contêm a lógica de negócios, como fazer requisições à API do Spotify para buscar dados.

A comunicação entre essas partes é feita de forma simples: o controlador recebe uma requisição, chama o serviço para processar a lógica e retorna os dados para o usuário.

### Fluxo do Sistema

1. O **cliente** (por exemplo, o navegador ou o Insomnia) faz uma requisição para o servidor.
2. O **controlador** recebe a requisição e chama o **serviço**.
3. O **serviço** interage com a **API do Spotify** para buscar as informações necessárias.
4. O **controlador** envia os dados de volta para o cliente.

Essa organização ajuda a manter o código limpo e fácil de entender e modificar.

## **Instalação**

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/barbaraluizaoliveira/spotify-api-nestjs.git
   npm install
  

2. Na raiz do projeto, crie um arquivo chamado .env com as seguintes variáveis de ambiente:

## **Spotify API Config** 
SPOTIFY_CLIENT_ID=seu_client_id_aqui

SPOTIFY_CLIENT_SECRET=seu_client_secret_aqui

SPOTIFY_API_URL=https://api.spotify.com/v1

3. Rodar o projeto
   ```bash
   npm run start

4. Testando endpoints:

## **Testando os Endpoints com Insomnia**

Para testar os endpoints da API com Insomnia, importe o arquivo de requisições incluído neste repositório.

1. Baixe o arquivo [insomnia_requests.json](./docs/insomnia_requests.json).
2. Abra o **Insomnia**.
3. Selecione **File > Import** e escolha o arquivo baixado.
4. A coleção de requisições será carregada no Insomnia. Você pode agora testar os endpoints da API.


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
