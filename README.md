# bom-jogador

Trabalho acadêmico da disciplina de **Arquitetura de Front End**, do curso de
pós-graduação em **Arquitetura de Software Distribuído**. Aplicação React +
Vite usada para praticar a organização de um projeto front-end em camadas.

> Projeto de estudo — sem fins comerciais.

## Stack

- React 19 + React Router 7
- Vite 8
- Bulma 1 (CSS)
- localForage (persistência local, ainda não usada nas telas)
- ESLint 10 (flat config)
- [RAWG Video Games Database API](https://rawg.io/apidocs)

## Scripts

```bash
npm install     # instala dependências
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção -> dist/
npm run preview  # pré-visualiza o build
npm run lint     # eslint
```

## Rotas

| Rota          | Tela                                                    |
| ------------- | -------------------------------------------------------- |
| `/`           | Jogos populares (lista, cards)                            |
| `/games/:id`  | Detalhes de um jogo                                       |
| `/buscar`     | Busca por nome — ainda "em construção"                    |
| `/favoritos`  | Favoritos — ainda "em construção"                          |
| `/jogando`    | Estou Jogando — ainda "em construção"                      |
| `/sobre`      | Sobre o projeto                                            |
| `/manual`     | Manual de uso                                              |
| `/termos`     | Termos de Uso                                              |

## Identidade visual

Tema dark retro-gamer: fonte pixel (Press Start 2P, via Google Fonts),
scanlines de CRT, paleta ciano/magenta sobre azul-marinho. Cada componente
usa seu próprio CSS Module (`Componente.module.css`), escopado — só o
`index.css` guarda o que é realmente global (reset, tema, tipografia).

## Configuração da chave de API (RAWG)

A aplicação é **no-backend**: a chave de API não fica salva no código nem
enviada a nenhum servidor próprio.

- **Hoje**: não existe ainda uma tela de Setup para o usuário final colar a
  própria chave pela interface (é um próximo passo do projeto). O único jeito
  de rodar a aplicação localmente é via `.env.local`, abaixo.
- **Ambiente de desenvolvimento**: crie um arquivo `.env.local` na raiz do
  projeto (baseado em [`.env.local.example`](.env.local.example)):

  ```bash
  cp .env.local.example .env.local
  ```

  E preencha com sua própria chave (obtida em https://rawg.io/apidocs):

  ```
  VITE_RAWG_DEV_API_KEY=sua_chave_aqui
  ```

  Essa chave só é usada como **fallback em modo dev**, e apenas se não houver
  nenhuma chave salva no navegador. `.env.local` é ignorado pelo `.gitignore`
  (padrão `*.local`) e **nunca deve ser commitado**.

⚠️ Nunca cole sua chave de API diretamente em código-fonte, no `.env.local.example`,
no README ou em qualquer arquivo versionado.

## Estrutura

O código em `src/` é organizado por responsabilidade:

| Pasta         | Responsabilidade                                              |
| ------------- | ------------------------------------------------------------ |
| `components/` | Componentes de UI reutilizáveis (apresentacionais)          |
| `views/`      | Telas ligadas a rotas; orquestram components, hooks, services |
| `hooks/`      | Custom hooks (lógica de estado/efeito reutilizável)          |
| `services/`   | Comunicação externa (HTTP/API, storage)                     |
| `config/`     | Constantes e configuração da aplicação                      |

Fluxo: `views → hooks → services → config`.

Cada componente/view fica em sua própria pasta (`GameCard/GameCard.jsx` +
`GameCard.module.css`, por exemplo), com o CSS escopado via CSS Modules —
evita conflito de nomes de classe entre componentes.

## Licença

O código deste repositório está sob a [licença MIT](LICENSE).

Essa licença cobre apenas o **código-fonte** da aplicação. Os dados e
imagens de jogos exibidos pelo app vêm da [RAWG Video Games Database
API](https://rawg.io/apidocs) em tempo real (nunca ficam armazenados neste
repositório) e permanecem sujeitos aos [termos de uso da RAWG](https://rawg.io/tos_api) —
veja também a página `/termos` do app.
