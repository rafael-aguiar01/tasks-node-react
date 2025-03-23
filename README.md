# Desafio Node.js e React - Gerenciamento de Tarefas

Este é um projeto de uma aplicação de gerenciamento de tarefas, com backend e frontend, desenvolvido como parte de um processo seletivo. O backend implementa um CRUD completo para tarefas, e o frontend permite criar, listar, atualizar e deletar tarefas de forma interativa.

## Tecnologias Utilizadas

### Backend
- **Node.js** : Ambiente de execução JavaScript.
- **Express** : Framework web para construção da API REST.
- **TypeScript** : Superset do JavaScript para tipagem estática.
- **Prisma** : ORM para integração com o banco de dados PostgreSQL.
- **PostgreSQL** : Banco de dados relacional.
- **tsyringe** : Biblioteca de injeção de dependências.
- **Zod** : Biblioteca de validação de esquemas.
- **Git** : Controle de versão.

### Frontend
- **React** : Biblioteca para construção de interfaces de usuário.
- **TypeScript** : Tipagem estática no frontend.
- **Tailwind CSS** : Framework CSS utilitário para estilização.
- **Axios** : Cliente HTTP para fazer requisições à API.
- **React Toastify** : Biblioteca para exibir notificações toast.
- **React Confirm Alert** : Biblioteca para exibir caixas de diálogo de confirmação.

## Pré-requisitos
Antes de rodar o projeto, certifique-se de ter os seguintes requisitos instalados:

- **Node.js (versão 18 ou superior)**: [Download](https://nodejs.org/)
- **npm** : Gerenciador de pacotes (vem com o Node.js).
- **PostgreSQL** : Banco de dados relacional instalado e configurado.
- **Git** : Para clonar o repositório.

## Instruções para Rodar o Projeto

### 1. Clonar o Repositório
Clone o repositório para sua máquina local:
```bash
git clone https://github.com/rafael-aguiar01/tasks-node-react.git
cd teste-react-node
```

### 2. Configurar o Backend
O backend está na pasta **backend**.

#### 2.1. Instalar Dependências
```bash
cd backend
npm install
```

#### 2.2. Configurar o Banco de Dados
Crie um banco de dados PostgreSQL chamado `tasks_db`. Configure as variáveis de ambiente criando um arquivo `.env` na raiz da pasta **backend**:
```env
DATABASE_URL="postgresql://seu-usuario:sua-senha@localhost:5432/tasks_db?schema=public"
```
Substitua `seu-usuario` e `sua-senha` pelas credenciais do seu PostgreSQL.

#### 2.3. Rodar as Migrations
Execute as migrations do Prisma para criar a tabela `tasks`:
```bash
npx prisma migrate dev --name init
```

#### 2.4. Iniciar o Backend
```bash
npm run dev
```
O servidor estará rodando em `http://localhost:3333`.

### 3. Configurar o Frontend
O frontend está na pasta **frontend**.

#### 3.1. Instalar Dependências
```bash
cd frontend
npm install
```

#### 3.2. Iniciar o Frontend
```bash
npm run dev
```
O frontend estará rodando em `http://localhost:5173` (ou outra porta, dependendo da configuração do Vite).

### 4. Usar a Aplicação
Acesse `http://localhost:5173` no navegador.

- Use o formulário para adicionar novas tarefas.
- Marque tarefas como concluídas ou desmarque-as.
- Exclua tarefas conforme necessário.

## Endpoints da API
O backend expõe os seguintes endpoints para o CRUD de tarefas:

| Método | Rota          | Descrição                |
|---------|--------------|--------------------------|
| **POST** | `/tasks`      | Criar uma nova tarefa    |
| **GET**  | `/tasks`      | Listar todas as tarefas  |
| **PUT**  | `/tasks/:id`  | Atualizar uma tarefa     |
| **DELETE** | `/tasks/:id` | Deletar uma tarefa       |

Exemplo de corpo para **POST** e **PUT**:
```json
{
  "title": "Nova tarefa",
  "description": "Descrição opcional",
  "status": "PENDING"
}
```

## Estrutura do Projeto
```
/backend:
  /src: Código-fonte (controllers, use cases, repositórios, rotas, schemas).
  /prisma: Configurações do Prisma e migrations.

/frontend:
  /src: Código-fonte React (componentes, estilos).
```

## Informações Relevantes
- O backend segue uma arquitetura modular com injeção de dependências (`tsyringe`) e validação de dados (`Zod`).
- O frontend é uma aplicação simples em React que consome a API do backend.
- A tabela `tasks` no banco de dados tem os campos: `id`, `title`, `description`, `status` (enum: `PENDING`, `COMPLETED`), `createdAt`.
- Testes locais foram realizados com sucesso para todos os endpoints e interações no frontend.

