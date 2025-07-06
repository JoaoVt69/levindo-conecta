
# Levindo Conecta - Aplicativo Escolar (Versão Web)

Este projeto é a versão web do aplicativo escolar **Levindo Conecta**, desenvolvido com **Next.js**, **Clerk**, **Firebase**, **TailwindCSS** e **ShadCN UI**.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 13+ App Router](https://nextjs.org)
- [Clerk](https://clerk.dev) (Autenticação)
- [Firebase Firestore + Admin SDK](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.dev)

---

## 🔧 Como executar o projeto

### 1. Clone o projeto e acesse a pasta:

```bash
git clone <URL-do-repositório>
cd levindo_conecta_site
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure variáveis de ambiente:

Crie um arquivo `.env.local` com:

```
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_APPLICATION_CREDENTIALS=./firebase-service-account.json
```

E adicione seu arquivo JSON de conta de serviço do Firebase na raiz do projeto com o nome: `firebase-service-account.json`.

### 4. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse em `http://localhost:3000`

---

## 📁 Estrutura de Pastas

```
app/
  dashboard/         --> Painel principal
  avisos/            --> Avisos escolares
  calendario/        --> Calendário escolar
  secretaria/        --> Comunicação com secretaria
  atestados/         --> Envio de atestados
  agendamentos/      --> Agendamento de reuniões
  responsavel/       --> Área dos responsáveis
  api/sendMessage/   --> Exemplo de Server Action
lib/
  firebase-admin.ts  --> Firebase Admin SDK
components/
  ui/                --> Componentes do ShadCN
styles/
  globals.css        --> Estilização base com Tailwind
```

---

## 🛡️ Segurança

- Autenticação protegida via Clerk
- Firestore operado somente por ações de servidor
- Sem informações sensíveis no frontend

---

## 📬 Contato

Caso tenha dúvidas, sugestões ou queira expandir este projeto, entre em contato com o desenvolvedor.

---
**Levindo Conecta - 2025 ©**
