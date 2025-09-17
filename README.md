# 🎱 Magic AIght Ball

> *A magical AI-powered fortune teller for work experience students to vibe code together!*

Welcome to the **Magic AIght Ball** project! 🎉 This is where work experience students learn modern web development by building something fun and magical - a smart twist on the classic Magic 8 Ball, powered by Azure OpenAI.

## ✨ What We're Building

The Magic AIght Ball is a responsive web application that:
- 🎯 **Answers your questions** using AI instead of pre-programmed responses
- 📱 **Works everywhere** - mobile, tablet, and desktop
- 🎨 **Looks amazing** with smooth animations and modern design
- 🇦🇺 **Speaks Australian** because we're keeping it local, mate!
- 😊 **Uses emoji** instead of boring icons for extra fun

## 🚀 Quick Start

### For Students Getting Started
1. **Read the guidelines**: Check out [copilot-instructions.md](./copilot-instructions.md)
2. **Understand the project**: Browse [docs/requirements/](./docs/requirements/)
3. **Set up your environment**: Follow the setup instructions below
4. **Start coding**: Pick an issue and have a go!

### Development Setup
```bash
# Clone the repository
git clone https://github.com/emmasteel/Work-Experience-Magic-AIght-Ball.git
cd Work-Experience-Magic-AIght-Ball

# Install dependencies for all packages
npm run setup

# Start the development servers
npm run dev
```

This will start both the frontend (React) and backend (Node.js) development servers.

## 📁 Project Structure

```
🎱 Magic AIght Ball/
├── 📱 frontend/          # React TypeScript app
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── modules/      # Feature-based modules
│   │   ├── styles/       # Modular CSS files
│   │   └── utils/        # Helper functions
├── 🖥️ backend/           # Node.js API server
│   ├── src/
│   │   ├── routes/       # API endpoints
│   │   ├── services/     # Business logic
│   │   └── utils/        # Helper functions
├── 🔗 shared/            # Shared types and utilities
├── 📚 docs/              # All documentation
│   ├── requirements/     # Project requirements
│   ├── api/             # API documentation
│   └── user-guide/      # User documentation
└── 🛠️ .github/           # Issue templates and workflows
```

## 🛠️ Development Commands

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start only frontend
npm run dev:backend      # Start only backend

# Building
npm run build            # Build everything
npm run build:frontend   # Build frontend only
npm run build:backend    # Build backend only

# Testing
npm test                 # Run all tests
npm run test:frontend    # Test frontend only
npm run test:backend     # Test backend only

# Code Quality
npm run lint             # Lint all code
npm run format           # Format all code with Prettier
```

## 🎯 Tech Stack

### Frontend 📱
- **React 18+** with TypeScript for type safety
- **Vite** for fast development and building
- **CSS Modules** for modular styling
- **Jest & React Testing Library** for testing

### Backend 🖥️
- **Node.js 18+** with TypeScript
- **Express.js** for the API server
- **Azure OpenAI** for AI-powered responses
- **Jest** for testing

### Development Tools 🔧
- **TypeScript** for type safety across the stack
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Concurrently** for running multiple dev servers

## 📚 Learning Resources

### For First-Time Coders
- 📖 [Copilot Instructions](./copilot-instructions.md) - Your coding companion guide
- 🎯 [Project Requirements](./docs/requirements/) - What we're building and why
- 🤝 [Contributing Guide](./CONTRIBUTING.md) - How to contribute effectively

### Documentation
- 📋 [Requirements](./docs/requirements/) - Detailed project specifications
- 🔌 [API Docs](./docs/api/) - Backend API documentation
- 👥 [User Guide](./docs/user-guide/) - How to use the finished app

## 🎮 Getting Involved

### New to Coding?
No worries! This project is designed for learners:
1. **Start small**: Pick a simple issue to begin with
2. **Ask questions**: Use comments and discussions
3. **Learn together**: Help your teammates and ask for help
4. **Have fun**: Remember, the goal is to learn and enjoy!

### Ways to Contribute
- 🐛 **Fix bugs**: Help squash those pesky issues
- ✨ **Add features**: Bring new ideas to life
- 📝 **Improve docs**: Make things clearer for everyone
- 🎨 **Design**: Create beautiful and functional interfaces
- 🧪 **Test**: Help ensure everything works correctly

### Reporting Issues
Use our issue templates:
- 🐛 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- ✨ [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)

## 🎊 Contributors

Thank you to all the amazing work experience students and mentors who make this project possible! 

Every contribution, no matter how small, is valued and celebrated. 🙌

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎱 The Magic Awaits

Ready to start your coding journey? The Magic AIght Ball is waiting for your contributions! 

**Remember**: Every expert was once a beginner. Let's build something magical together! ✨

---

*Ask a question, shake the ball, and let the AI magic begin!* 🎱✨
