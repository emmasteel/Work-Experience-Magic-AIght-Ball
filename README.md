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

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
