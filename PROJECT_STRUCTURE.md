# 🎱 Magic AIght Ball - Project Structure

This document explains how the project is organised and what each file does.

## 📁 Directory Structure

```
Work-Experience-Magic-AIght-Ball/
├── .github/                          # GitHub configuration
│   ├── copilot-instructions.md      # Instructions for GitHub Copilot
│   └── ISSUE_TEMPLATE/              # Issue templates
├── docs/                             # Planning documents
│   ├── architecture-design.md       # System architecture planning
│   ├── frontend-requirements.md     # Frontend specifications
│   └── integration-requirements.md  # Integration specifications
├── frontend/                         # React frontend application
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── MagicBall/          # Magic 8 Ball display component
│   │   │   │   ├── MagicBall.tsx           # Component logic
│   │   │   │   ├── MagicBall.module.css    # Component styles
│   │   │   │   └── index.ts                # Component export
│   │   │   └── QuestionInput/       # Question input component
│   │   │       ├── QuestionInput.tsx       # Component logic
│   │   │       ├── QuestionInput.module.css # Component styles
│   │   │       └── index.ts                # Component export
│   │   ├── services/                # API and external services
│   │   │   └── api.ts              # Backend API communication
│   │   ├── hooks/                   # Custom React hooks (empty for now)
│   │   ├── types/                   # TypeScript type definitions (empty for now)
│   │   ├── App.tsx                  # Main application component
│   │   ├── App.css                  # Main application styles
│   │   ├── index.css                # Global styles
│   │   └── main.tsx                 # Application entry point
│   ├── public/                       # Static assets
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies and scripts
│   ├── tsconfig.json                 # TypeScript configuration
│   └── vite.config.ts               # Vite build tool configuration
├── backend/                          # Express backend server
│   ├── src/
│   │   └── server.ts                # Main server file (API endpoints)
│   ├── dist/                         # Compiled JavaScript (ignored by git)
│   ├── package.json                  # Backend dependencies and scripts
│   └── tsconfig.json                # TypeScript configuration
├── .env.example                      # Example environment variables
├── .gitignore                        # Files to ignore in version control
├── package.json                      # Root-level scripts for convenience
└── README.md                         # Project documentation

## 🎯 Key Files Explained

### Frontend Files

**`frontend/src/App.tsx`**
- Main application component
- Manages state for questions and answers
- Coordinates between MagicBall and QuestionInput components
- Handles API calls to the backend

**`frontend/src/components/MagicBall/MagicBall.tsx`**
- Displays the Magic 8 Ball with the answer window
- Shows loading animation while waiting for response
- Uses modular CSS for styling (MagicBall.module.css)

**`frontend/src/components/QuestionInput/QuestionInput.tsx`**
- Input field for users to type questions
- Submit button to ask the question
- Character counter (500 character limit)
- Uses modular CSS for styling (QuestionInput.module.css)

**`frontend/src/services/api.ts`**
- Handles all communication with the backend
- `askQuestion()` - Sends question to backend
- `healthCheck()` - Checks if backend is running

### Backend Files

**`backend/src/server.ts`**
- Express server setup
- API endpoints:
  - `GET /api/health` - Health check
  - `POST /api/ask-question` - Process questions
- Input validation
- Azure OpenAI integration (ready but not yet implemented)
- Fallback responses when Azure OpenAI is not configured

### Configuration Files

**`.env.example`**
- Template for environment variables
- Shows what Azure OpenAI credentials are needed
- Copy to `.env` and fill in your actual values

**`.gitignore`**
- Tells Git which files to ignore
- Excludes node_modules, build outputs, and .env files

**`tsconfig.json` files**
- TypeScript compiler configuration
- Ensures type safety across the project

**`package.json` files**
- Lists project dependencies
- Defines npm scripts (dev, build, start)

## 🔄 How It All Works Together

1. **User visits the website** → Vite serves the React frontend
2. **User types a question** → QuestionInput component captures it
3. **User clicks "Ask"** → App.tsx calls api.ts
4. **API request sent** → api.ts sends POST to backend
5. **Backend validates** → server.ts checks the question
6. **Backend responds** → Returns an answer (fallback or AI-generated)
7. **Frontend updates** → MagicBall component displays the answer

## 🎨 Styling Approach

We use **CSS Modules** for styling:
- Each component has its own `.module.css` file
- Styles are scoped to the component (no conflicts!)
- Follows Australian English (colour, centre, etc.)
- Mobile-first responsive design
- Purple magical theme throughout

## 🚀 Development Workflow

1. Start both servers:
   ```bash
   # Terminal 1
   cd backend && npm run dev
   
   # Terminal 2
   cd frontend && npm run dev
   ```

2. Make changes to files
3. Changes auto-reload (hot module replacement)
4. Test in browser at http://localhost:5173
5. Backend API at http://localhost:3001

## 📝 Next Steps

Ready to start coding? Here are some ideas:
- Add more magical animations to the ball
- Create custom hooks in `frontend/src/hooks/`
- Add TypeScript interfaces in `frontend/src/types/`
- Implement Azure OpenAI integration in `backend/src/server.ts`
- Add a question history feature
- Improve error messages with more personality

Happy coding! 🎱✨
