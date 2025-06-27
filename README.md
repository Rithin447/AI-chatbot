# AI Chatbot – React Frontend with Local LLM Integration

This is a simple AI Chatbot web application built using **ReactJS**, connected to a **local Large Language Model (LLM)** using **Ollama** and **llama3**. The chatbot allows users to have real-time interactions with an AI assistant, without requiring cloud API access.

## Tech Stack

- **React.js** – Frontend interface
- **Bootstrap 5** – Styling and layout
- **Ollama** – Local LLM model runner
- **llama3 (Meta AI)** – Language model used
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

Ollama is used to run local LLMs (like llama3) directly on your machine.

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

- Centered and styled chatbot interface with Bootstrap
- Real-time user input with bot response handling
- Loading indicator while the bot is generating responses
- Clean input and auto-scrolling chat window
- Easy integration with Ollama's local LLM

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

- Ensure you have enough system memory (8GB+) to run the llama3 model locally.
- The model runs completely offline after initial setup – no cloud APIs required.
- You can modify `App.jsx` and `ChatBox.jsx` to customize prompts or extend features.
