# 🎱 Welcome to the Magic AIght Ball Project! ✨

Hey Microsoft Work Experience gang! 👋 

## 🚀 What Are We Building?

We're creating a modern, AI-powered version of the classic Magic 8 Ball toy! Instead of just random responses, our Magic 8 Ball will use AI to give more thoughtful (and fun) answers to questions. Think of it as a wise digital fortune teller! 

## 🏁 Getting Started

### Step 1: Create Your GitHub Account (If You Don't Have One)

GitHub is like a social network for code! Here's how to join:

1. **Go to GitHub**: Visit [github.com](https://github.com) in your web browser
2. **Click "Sign up"**: Look for the green button in the top right corner
3. **Choose your username**: Pick something cool but professional (you might use this for work later!)
4. **Enter your email**: Use an email you check regularly
5. **Create a password**: Make it strong and secure
6. **Verify you're human**: Complete the puzzle (prove you're not a robot!)
7. **Click "Create account"**: You're almost there!
8. **Verify your email**: Check your inbox and click the verification link

🎉 Congratulations! You now have a GitHub account!

### Step 2: Understanding This Repository (Repo)

A **repository** (or "repo" for short) is like a project folder that stores all our code, documents, and project history. Think of it as a time machine for your code - you can see every change that's ever been made!

#### What's in this repo:
- **README.md** (this file!) - Your project guide
- **docs/** folder - Where we keep our planning documents
- Soon: All the cool code for our Magic 8 Ball!

### Install Visual Studio Code (VS Code)

1. Download VS Code
   - Visit https://code.visualstudio.com and choose the Windows installer.
   - Run the installer and follow the prompts. For convenience, enable options such as "Add to PATH" and "Open with Code" when available.

2. Install Git
   - Download Git for Windows from https://git-scm.com/download/win and run the installer.
   - During installation keep the default options or enable "Git Bash" and "Use Git from the Windows Command Prompt / Add to PATH" if you want to run Git commands from PowerShell or the integrated VS Code terminal.
   - Verify the installation by running `git --version` in a terminal.
   - Configure your identity so commits attribute correctly:
     - `git config --global user.name "Your Name"`
     - `git config --global user.email "you@example.com"`

3. Open the project in VS Code
   - If you haven't cloned the repository yet, clone it directly from VS Code using Quick Open:
     - Press Ctrl+P, type `>git clone`, then paste this URL: https://github.com/emmasteel/Work-Experience-Magic-AIght-Ball.git
     - Follow the prompts to choose a local folder. VS Code will offer to open the cloned repository when finished.
   - After cloning (or if you already have the folder), open the project folder in VS Code:
     - Use File → Open Folder... in the VS Code UI and select the project folder.

4. Install Node.js (if not already installed)
   - This project uses JavaScript/TypeScript tools which require Node.js. Download the LTS version from https://nodejs.org and install it.

These steps should get you up and running quickly so you can start contributing to the Magic AIght Ball project.

## 📚 Project Documentation

Check out our planning documents in the `docs/` folder:

- **[Architecture Design](docs/architecture-design.md)** - How we'll structure our app
- **[Frontend Requirements](docs/frontend-requirements.md)** - What the user interface should do
- **[Integration Requirements](docs/integration-requirements.md)** - How different parts work together

## 🎯 Project Goals

By the end of this work experience, you'll have:
- ✅ Learned how to use GitHub
- ✅ Understood how web applications work
- ✅ Built something cool with AI
- ✅ Worked as part of a development team
- ✅ Worked with real engineers on the Software Development Lifecycle (SDLC)
- ✅ Thought like a Business Analyst to extract requirements from users
- ✅ Created something you can show friends and family!

## 🛠️ Development Setup

### Prerequisites

Before you start, make sure you have installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Git** - For version control
- **VS Code** - Your code editor

### Quick Start

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone https://github.com/emmasteel/Work-Experience-Magic-AIght-Ball.git
   cd Work-Experience-Magic-AIght-Ball
   ```

2. **Install all dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your Azure OpenAI credentials
   # (We'll configure Azure OpenAI later - the app works without it for now!)
   ```

4. **Run the development servers**

   **Option 1: Run frontend and backend separately (recommended for learning)**
   
   In one terminal (backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   In another terminal (frontend):
   ```bash
   cd frontend
   npm run dev
   ```

   **Option 2: Run both together**
   ```bash
   # From the project root
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api/health

### Project Structure

```
Work-Experience-Magic-AIght-Ball/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # React components (modular CSS)
│   │   │   ├── MagicBall/
│   │   │   │   ├── MagicBall.tsx
│   │   │   │   ├── MagicBall.module.css
│   │   │   │   └── index.ts
│   │   │   └── QuestionInput/
│   │   │       ├── QuestionInput.tsx
│   │   │       ├── QuestionInput.module.css
│   │   │       └── index.ts
│   │   ├── services/        # API calls
│   │   ├── hooks/           # Custom React hooks
│   │   └── types/           # TypeScript type definitions
│   └── package.json
├── backend/                  # Node.js + Express backend
│   ├── src/
│   │   └── server.ts        # Main server file
│   └── package.json
├── docs/                     # Planning documents
├── .env.example             # Example environment variables
└── package.json             # Root package.json for convenience scripts
```

### Available Scripts

**Frontend (in `frontend/` directory):**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Check code quality

**Backend (in `backend/` directory):**
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production build

**Root directory:**
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both frontend and backend

### Configuring Azure OpenAI (Optional)

The app works with fallback responses without Azure OpenAI configured. When you're ready to add AI:

1. Get Azure OpenAI credentials from Azure Portal
2. Copy `.env.example` to `.env`
3. Fill in your credentials:
   ```
   AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
   AZURE_OPENAI_KEY=your-api-key-here
   AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
   ```

## 🤝 Team Collaboration

Remember, coding is a team sport! Here are some tips:
- **Ask questions** - No question is too small!
- **Help others** - Share your discoveries
- **Be kind** - We're all learning together
- **Have fun** - This should be enjoyable!

## 🆘 Need Help?

- **Stuck on something?** Create an "Issue" in this repo and describe your problem
- **Found a bug?** Let us know in the Issues section
- **Have an idea?** We'd love to hear it!

---

Ready to make some magic happen? Let's code! 🚀✨
