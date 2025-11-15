# Frontend - Jornada de Sessões

Este é um projeto de frontend desenvolvido com React, TypeScript e Vite para visualizar a jornada de sessões de usuários. A aplicação consome uma API local para buscar os dados e os exibe em uma tabela interativa e agrupável usando o Material-UI Data Grid.

## Visão Geral

A aplicação busca dados de sessões e seus respectivos "touch points" de uma API. Em seguida, processa esses dados para exibi-los de forma clara em uma grade de dados, onde cada linha representa um ponto de contato dentro de uma sessão de usuário. A jornada completa do usuário é exibida, e a tabela permite o agrupamento por diferentes canais de marketing.

## Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Vite:** Ferramenta de build moderna e rápida para desenvolvimento frontend.
- **TanStack Query (React Query):** Para fetching, cache e gerenciamento de estado de dados do servidor.
- **Axios:** Cliente HTTP para realizar requisições à API.
- **Material-UI (MUI) & MUI X Data Grid:** Componentes de UI e uma grade de dados avançada para exibir as informações.
- **Tailwind CSS:** Framework de CSS para estilização rápida.
- **pnpm:** Gerenciador de pacotes rápido e eficiente em uso de disco.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)

Além disso, é necessário que o **serviço de backend esteja em execução** e servindo os dados das jornadas na rota `http://localhost:3333/api/journeys`.

## Instruções de Execução

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd frontend-nemu-tab
    ```

2.  **Instale as dependências:**
    Use o `pnpm` para instalar todas as dependências do projeto.

    ```bash
    pnpm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    Este comando iniciará o servidor de desenvolvimento do Vite.

    ```bash
    pnpm dev
    ```

4.  **Acesse a aplicação:**
    Após a execução do comando acima, a aplicação estará disponível no seu navegador no endereço:
    http://localhost:5173

Lembre-se que a aplicação precisa se comunicar com o backend na porta `3333` para funcionar corretamente.
