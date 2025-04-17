Here’s a well-structured **`README.md`** file for your project. It includes setup instructions, features, and usage details for both **Mistral** and **Gemini** integrations. You can copy and paste this into your `README.md` file.

---

### ✅ `README.md`

```md
# 🍽️ Savory Bites Restaurant Chatbot

This is a chatbot for **Savory Bites**, a multi-cuisine family restaurant. The chatbot provides restaurant-related information such as:

- Menu
- Opening hours
- Table bookings
- Dietary options

It uses **Mistral** for offline AI chat and **Gemini (Google Cloud AI)** for an online AI solution.

---

## 📁 Project Structure

```
project/
├── backend/
│   └── server.js         # Server code for Ollama + Mistral (Offline AI)
│   └── server-gemini.js  # Server code for Gemini (Online AI)
├── frontend/
│   └── index.html        # Chatbot UI
├── .env                  # Gemini API Key (only for Gemini version)
└── README.md             # You're here!
```

---

## 🛠️ 1. Setup Instructions

### **Option 1: Chatbot with Ollama + Mistral (Offline)**

#### 🧑‍💻 **Prerequisites**:

- [Node.js](https://nodejs.org/) (v16+)
- [Ollama](https://ollama.com/) installed
- Mistral model pulled locally

#### **Steps to Run**:

1. **Install Node dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Pull Mistral model in Ollama**:

   ```bash
   ollama pull mistral
   ```

3. **Start Mistral model**:

   ```bash
   ollama run mistral
   ```

4. **Start the backend server**:

   ```bash
   node server.js
   ```

5. **Run the frontend**:  
   Open `frontend/index.html` in your browser.

---

### **Option 2: Chatbot with Gemini (Online AI)**

> **Gemini requires an internet connection** and a valid Google Cloud API key.

#### 🧑‍💻 **Prerequisites**:

- Node.js installed
- A [Gemini API Key](https://makersuite.google.com/app)

#### **Steps to Run**:

1. **Create a `.env` file** in the root directory with your Gemini API key:

   ```env
   GEMINI_API_KEY=your-google-api-key-here
   ```
2. **Run the frontend**:  
   Open `frontend/index.html` in your browser.

---

## 🌐 2. Frontend Chatbot UI

The frontend is a simple HTML/CSS/JS interface for interacting with the chatbot. It supports:

- **User input**: Text field for users to type their questions.
- **Bot response**: Chatbot replies using either Mistral (Offline) or Gemini (Online).
- **Message styling**: User and bot messages are styled for a clean and professional look.

The chatbot UI is responsive and works on desktop and mobile browsers.

---

## 💡 Example Questions to Ask

- "What time do you open on Sundays?"
- "Can I book a table for 4 people on Friday?"
- "Do you offer vegan options?"
- "What's the price of the Margherita pizza?"

---

## 📞 Contact

This chatbot was developed for **Savory Bites Restaurant**. If you have any questions, feel free to contact the developer:

[Your Name or GitHub Link]

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests if you'd like to contribute or improve the chatbot.

---

## 🧪 Features

- **Multi-cuisine menu chatbot**
- **Opening hours & table bookings info**
- **Supports both Mistral (Offline) and Gemini (Online) models**
- **Clean, responsive frontend**
- **Handles natural language queries with AI**

---

## 📅 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---

### 🌟 Key Points in the `README.md`:
- **Setup**: Includes detailed instructions for both **Offline** (Mistral) and **Online** (Gemini) setups.
- **Project Structure**: Clear organization of files.
- **Usage Examples**: List of sample questions users can ask the chatbot.
- **Contact & Contributing**: A place to credit the creator and allow contributions.
  
You can further personalize the **contact section** and **license** if needed.

Let me know if you need any adjustments or more details in the README!