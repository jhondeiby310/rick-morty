# Rick and Morty Characters App

A responsive web application built with Next.js that allows users to browse, filter, and favorite characters from the Rick and Morty series. Character details are available, and filters include search, species, and favorite status. Favorite characters are persisted across sessions.

📍 **Live demo**: [rick-morty-nine-black.vercel.app]

---

## 🧑‍💻 Technologies Used

- **Next.js 13+**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **React Query**
- **React Testing Library + Jest**
- **Heroicons**
- **Framer Motion**
- **Public Rick and Morty API**: [https://rickandmortyapi.com/]

---

## 🚀 Features

- 🔍 **Real-time search** by name.
- 🧬 **Filter by species** and **character type** (All / Starred / Others).
- ❤️ **Favorite characters** stored in `localStorage` and accessible from the sidebar.
- 🖥️ **Automatic redirection** to the first favorite or available character (desktop only).
- 📱 **Fully responsive layout** with tailored UX for mobile and desktop.
- 💅 **Custom scrollbar** for long lists.
- 📦 **Clean and modular code** using hooks, contexts, and composable components.
- 🧪 **Unit testing** with Jest and React Testing Library.

---

## 🗂️ Project Structure

src/
  ├── api/                      # API service functions
  ├── components/
  │   ├── character/
  │   │   ├── detail/           # Character detail view components
  │   │   └── list/             # Sidebar character list components
  │   ├── filters/              # Filters, search input, and filter panel
  │   ├── layout/               # Main layout and responsive sidebar
  │   └── ui/                   # Reusable UI elements (icons, spinners, messages)
  ├── constants/                # App-wide constant values (e.g. base URLs, filter options)
  ├── context/                  # React contexts (favorites, filters)
  ├── hooks/                    # Custom React hooks (e.g. filtering, media queries)
  ├── pages/                    # Next.js routes (index, character/[id])
  └── types/                    # TypeScript shared types

---

## 🧪 Testing

The project includes basic unit tests using:

- **Jest**
- **React Testing Library**

To run tests:

```bash
npm run test

---

📦 Getting Started
1. Clone the repository:
git clone https://github.com/jhondeiby310/rick-morty.git
cd rick-and-morty-app

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

Then open http://localhost:3000 in your browser.

⚙️ Requirements
Node.js ≥ 18.x

⚠️ This project does not support Node 14.x due to modern dependencies.

🌐 Environment Variables
The app currently uses a public API that does not require authentication.

In a production-grade setup, the base URL could be managed using .env variables:

NEXT_PUBLIC_BASE_URL=https://rickandmortyapi.com/api

📄 License
This project was developed as part of a technical test.
Personal or educational use is permitted.