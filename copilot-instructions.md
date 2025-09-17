# 🎱 Magic AIght Ball - Copilot Instructions

G'day developers! 👋 Welcome to the Magic AIght Ball project - where we're building the future of fortune telling with AI! 🚀

## 🎯 Project Overview

We're creating a modern web app that's a cheeky play on the classic Magic 8 Ball, but powered by Azure OpenAI models. Think "Magic **AI**ght Ball" - get it? 😉

## 🏗️ Architecture Guidelines

### Frontend - React TypeScript 📱
- **Framework**: React with TypeScript (for that type safety goodness!)
- **Styling**: Modular CSS - keep your styles organised and reusable
- **Responsiveness**: Mobile-first approach - it should look bonzer on any device
- **State Management**: Keep it simple - use React hooks unless you really need something heavier

### Backend - Node.js 🖥️
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js (keep it straightforward)
- **API**: RESTful endpoints for the magic predictions
- **AI Integration**: Azure OpenAI API for generating those mystical responses

## 📁 Project Structure

```
├── frontend/          # React TypeScript app
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── modules/       # Feature-based modules
│   │   ├── styles/        # Modular CSS files
│   │   └── utils/         # Helper functions
├── backend/           # Node.js API server
│   ├── src/
│   │   ├── routes/        # API endpoints
│   │   ├── services/      # Business logic
│   │   └── utils/         # Helper functions
├── docs/              # All documentation lives here
│   ├── requirements/      # Project requirements
│   ├── api/              # API documentation
│   └── user-guide/       # How to use the app
└── shared/            # Shared types and utilities
```

## 🎨 Design Philosophy

### Keep It Simple, Keep It Fun! 🎉
- **Modular Development**: Each feature should be self-contained
- **Component Reusability**: Build once, use everywhere
- **Clear Naming**: Use descriptive names that your future self will thank you for
- **Documentation**: Comment your code like you're explaining it to a mate

### UI/UX Guidelines 🎨
- **Emoji First**: Use emoji instead of traditional icons where possible 😊
- **Consistent Spacing**: Use a design system for spacing and colours
- **Accessibility**: Make it usable for everyone
- **Loading States**: Show users what's happening while the AI thinks

## 🛠️ Development Standards

### Code Quality 📝
- **TypeScript**: Use proper types - no `any` types unless absolutely necessary
- **ESLint**: Follow the linting rules (they're there to help!)
- **Prettier**: Keep formatting consistent
- **Testing**: Write tests for your components and functions

### CSS Best Practices 🎨
- **Modular CSS**: One CSS file per component/module
- **BEM Methodology**: Use Block-Element-Modifier naming
- **CSS Variables**: Use custom properties for consistent theming
- **Responsive Design**: Use CSS Grid and Flexbox

### Git Workflow 🔄
- **Descriptive Commits**: Write commit messages that explain what and why
- **Small Commits**: Make frequent, focused commits
- **Branch Naming**: Use descriptive branch names like `feature/magic-ball-ui`

## 🔗 Documentation Requirements

**Always link back to requirements!** 📋
- Reference specific requirement documents in your code comments
- Update documentation as you build features
- Keep the user guide updated with new functionality

Example:
```typescript
/**
 * Magic Ball Response Component
 * Implements requirement: docs/requirements/ui-specifications.md#response-display
 */
export const MagicResponse: React.FC = () => {
  // Component implementation
};
```

## 🌏 Australian English

We're keeping it local, mate! Use Australian English spelling throughout:
- `colour` not `color`
- `centre` not `center`
- `optimise` not `optimize`
- `behaviour` not `behavior`

## 🎯 Tips for First-Time Coders

### Start Small, Dream Big! 🌱
1. **Break it down**: Large features into smaller tasks
2. **One thing at a time**: Focus on getting one component working perfectly
3. **Ask questions**: Use comments to explain tricky bits
4. **Test early**: Try your code frequently to catch issues early

### Common Patterns 🔄
- **Component Structure**: Props → State → Effects → Render
- **Error Handling**: Always handle potential errors gracefully
- **API Calls**: Use async/await for cleaner asynchronous code
- **State Updates**: Use functional updates for React state

### Debugging Like a Pro 🐛
- **Console.log**: Your best friend for understanding data flow
- **React DevTools**: Essential for debugging React components
- **Network Tab**: Check API calls and responses
- **TypeScript Errors**: Read them carefully - they're usually spot on!

## 🎁 Fun Extras

### Easter Eggs 🥚
- Add some cheeky Australian responses to the magic ball
- Include fun loading animations
- Add sound effects for the full experience

### Engagement Features 🎪
- Shake animation when asking a question
- Particle effects for responses
- Share functionality for brilliant predictions

## 🔧 Development Commands

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run lint       # Check code quality
```

### Backend
```bash
npm run dev        # Start with hot reloading
npm run build      # Compile TypeScript
npm test           # Run API tests
npm run start      # Start production server
```

## 🎊 Remember

**Code is poetry, make it beautiful!** ✨

- Have fun with it - this is meant to be enjoyable!
- Don't be afraid to experiment and try new things
- Help your teammates - we're all learning together
- Celebrate small wins - every feature completed is an achievement!

**Most importantly**: If you're stuck, ask for help! We're all here to learn and grow together. 🤝

---

Happy coding, legends! May your code be bug-free and your predictions be magical! 🎱✨