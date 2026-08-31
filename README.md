# bom-jogador

Trabalho acadêmico da disciplina de **Arquitetura de Software** (pós-graduação),
módulo de Arquitetura Front-end. Aplicação React + Vite usada para praticar a
organização de um projeto front-end em camadas.

> Projeto de estudo — sem fins comerciais.

## Stack

- React 19
- Vite 8
- ESLint 10 (flat config)

## Scripts

```bash
npm install     # instala dependências
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção -> dist/
npm run preview  # pré-visualiza o build
npm run lint     # eslint
```

## Configuração da chave de API (RAWG)

A aplicação usa a [RAWG Video Games Database API](https://rawg.io/apidocs). Ela
é **no-backend**: a chave de API não fica salva no código nem enviada a
nenhum servidor próprio.

- **Uso normal do app**: o próprio usuário informa sua chave RAWG pela tela de
  Setup do app; ela é validada e guardada localmente no navegador (IndexedDB,
  via `localForage`). Nada disso vai para o repositório.
- **Ambiente de desenvolvimento (opcional)**: para não precisar colar a chave
  toda vez ao rodar `npm run dev`, crie um arquivo `.env.local` na raiz do
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
| `hooks/`      | Custom hooks (lógica de estado/efeito reutilizável)         |
| `services/`   | Comunicação externa (HTTP/API, localStorage)                |
| `config/`     | Constantes e configuração da aplicação                      |

Fluxo: `views → hooks → services → config`.
