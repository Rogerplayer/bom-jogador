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
