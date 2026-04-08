# Project→Income Engine 🚀

> Turn your student project into a monetizable idea — powered by AI.

A web platform that takes your project idea and instantly generates:
- 💰 Monetization paths (SaaS, Freelance, Product, etc.)
- 👥 Target user segments & where to find them
- 💵 Pricing models with concrete price suggestions
- ✅ Quick wins to start earning today
- 🚀 Best platforms to launch on
- ⚠️ Risks to watch out for

---

## 🖥️ Live Demo

> Deploy on Vercel for a free live link (see below)

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 |
| AI Engine | Anthropic Claude API (claude-sonnet-4) |
| Styling | Pure CSS + Google Fonts |
| Deployment | Vercel (recommended) |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/project-income-engine.git
cd project-income-engine
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The AI features work when deployed on Claude.ai or when called from an environment with Anthropic API access. For standalone use, add your own API key in `src/api.js`.

---

## 📁 Project Structure

```
project-income-engine/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProjectForm.js
│   │   ├── LoadingScreen.js
│   │   └── ResultReport.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── api.js
│   ├── constants.js
│   └── utils.js
├── package.json
└── README.md
```

---



## 📸 Features

- **Project Input Form** — Name, description, category, stage, and tech stack
- **AI-Powered Analysis** — Claude generates a full monetization report
- **Structured Output** — Score, paths, users, pricing, quick wins, risks
- **Responsive Design** — Works on desktop and mobile
- **Dark Theme** — Clean, professional dark UI

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.

---

## 📄 License

MIT — free to use, modify, and distribute.
