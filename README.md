Here’s a complete and clear `README.md` file you can include in your project folder. It shows **how to set up and run** both:

1. 🤖 A **local chatbot using Ollama + Mistral**  
2. 🌐 A **cloud chatbot using Gemini (Google AI)**

---

### ✅ `README.md`

```md
# 🍽️ Savory Bites Restaurant Chatbot

This project features two restaurant chatbot setups:

1. **Offline AI Chatbot using Ollama + Mistral** (fully local, no internet needed)
2. **Online AI Chatbot using Gemini API** (cloud-based, Google-powered)

---

## 📁 Project Structure

```
project/
├── backend/
│   └── server.js         # Express server for Ollama + Mistral
├── frontend/
│   └── index.html        # Chatbot UI
├── .env                  # Gemini API Key (only for Gemini version)
└── README.md             # You're here!
```

---

## 🧠 1. Chatbot with Ollama + Mistral (Offline)

### 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Ollama](https://ollama.com/) installed
- Mistral model pulled locally

### 🚀 Setup Instructions

1. **Install Node dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Pull Mistral model in Ollama:**

   ```bash
   ollama pull mistral
   ```

3. **Start Ollama model:**

   ```bash
   ollama run mistral
   ```

4. **Run the backend server:**

   ```bash
   node server.js
   ```

5. **Open the frontend:**

   Just double-click `frontend/index.html` or open it in your browser manually.

---

## 🌐 2. Chatbot with Gemini (Online)

> Requires internet access + a Google Cloud API key.

### 🛠 Prerequisites

- Node.js installed
- A [Gemini API Key](https://makersuite.google.com/app)

### 📁 File Setup

1. Inside your root folder, create a `.env` file with your API key:

   ```env
   GEMINI_API_KEY=your-google-api-key-here
   ```

2. Use a `server-gemini.js` (you can create this file) to handle Gemini-based chat.

3. Frontend can be reused — just switch the fetch endpoint to `/gemini-chat`.

> Let me know if you want a ready-made `server-gemini.js` too!

---

## 💡 Features

- 🍕 Multi-cuisine menu chatbot
- 🕐 Working hours & reservations info
- ✅ Supports Mistral (local) or Gemini (cloud)
- 🎨 Clean HTML/CSS/JS frontend
- 🤝 Handles user questions in natural language

---

## 🧪 Example Questions to Try

- "What time do you open on Sundays?"
- "Do you have gluten-free options?"
- "Can I book a table for 5 people on Friday?"
- "What's in the Veggie Alfredo Pasta?"

---

## 📞 Contact

Built with ❤️ for the **Savory Bites Restaurant Demo**  
Questions? DM [Your Name or GitHub Link]

```

---

Let me know if you'd like me to:

- Add screenshots of the UI
- Include the `server-gemini.js` file
- Turn this into a GitHub-ready repo

Happy building! 🍝💬