
# AI Chatbot – React Frontend with Local LLM Integration

This is a simple AI Chatbot web application built using **ReactJS**, connected to a **local Large Language Model (LLM)** using **Ollama** and **LLaMA 3**. The chatbot allows users to have real-time interactions with an AI assistant, without requiring cloud API access.

## Tech Stack

- **React.js** – Frontend interface
- **Bootstrap 5** – Styling and layout
- **Ollama** – Local LLM model runner
- **LLaMA 3 (Meta AI)** – Language model used (under non-commercial license)
- **Node.js & npm** – Development server and dependency management

## Prerequisites & Software Installation

Please install the following software before starting the project:

### 1. [Node.js & npm](https://nodejs.org/en/download)

Used to run the React development server and manage packages.

- Download and install Node.js (includes npm).
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

### 2. [Git](https://git-scm.com/downloads)

To clone the repository and manage version control.

- Download Git and install it.
- Verify installation:
  ```bash
  git --version
  ```

### 3. [Ollama](https://ollama.com/download)

Ollama is used to run local LLMs (like LLaMA 3) directly on your machine.

- Download and install Ollama.
- After installation, run the following in terminal:
  ```bash
  ollama run llama3
  ```

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Local LLM

Start the LLM in the background using Ollama:

```bash
ollama run llama3
```

Leave this terminal window open and running while the app is active.

### Step 4: Run the React App

```bash
npm start
```

This will launch the development server and open the chatbot in your default browser at `http://localhost:3000`.

## Features

- Styled chatbot interface with Bootstrap
- Real-time user input with bot response streaming
- "Bot is typing..." loading indicator
- Auto-scrolling conversation window
- Uses `fetch()` to stream responses from Ollama line-by-line for faster perception

## Folder Structure

```
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── ChatBox.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

## Notes

- Ensure you have enough system memory (8GB+ recommended) to run the LLaMA 3 model locally.
- The model runs completely offline after initial setup – no cloud APIs required.
- You can modify `App.jsx` and `ChatBox.jsx` to customize prompts or extend features.

---

## License & Disclaimer

This project integrates Meta's **LLaMA 3** model via the **Ollama** runtime for local, non-commercial use only. The model is used under the terms of Meta’s [license agreement](https://ai.meta.com/resources/models-and-libraries/llama-downloads/).

All React frontend and integration code in this repository is open source under the MIT license.

> ⚠This project is for educational and personal use only and is **not intended for public or commercial deployment**.
