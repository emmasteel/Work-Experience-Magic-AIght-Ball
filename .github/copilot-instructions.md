# 🤖 GitHub Copilot Instructions for Magic AIght Ball

G'day work experience legends! 👋 These instructions will help GitHub Copilot assist you better while building our magical AI-powered 8 ball. 

## 🎯 Project Context

You're building a **Magic AIght Ball** - a modern, AI-powered version of the classic Magic 8 Ball toy that uses Azure OpenAI to provide thoughtful, mystical responses to user questions.

## 🏗️ Architecture Guidelines

### Frontend Development
- **Framework**: React with TypeScript
- **Styling**: Modular CSS (separate .module.css files for each component)
- **Responsiveness**: Mobile-first design that works on phones, tablets, and desktops
- **Theme**: Purple, magical
- **Accessibility**: Include ARIA labels, keyboard navigation, and screen reader support

### Backend Development  
- **Runtime**: Node.js with Express
- **Language**: TypeScript preferred for type safety
- **API Design**: RESTful endpoints with clear error handling
- **AI Integration**: Azure OpenAI for generating magical responses

### Code Organisation
- **Components**: One component per file, modular and reusable
- **Styles**: Component-specific CSS modules (e.g., `MagicBall.module.css`)
- **Documentation**: All code should reference requirements in `/docs` folder
- **Functions**: Keep functions small and focused on single responsibilities

## 📁 File Structure Preferences

```
src/
├── components/
│   ├── MagicBall/
│   │   ├── MagicBall.tsx
│   │   ├── MagicBall.module.css
│   │   └── index.ts
│   └── QuestionInput/
│       ├── QuestionInput.tsx
│       ├── QuestionInput.module.css
│       └── index.ts
├── hooks/
├── services/
└── types/
```

## 🎨 Styling Guidelines

- **Colours**: Dark/mystical backgrounds with bright, contrasting text
- **Fonts**: Modern, readable fonts for body text; mystical fonts for headings
- **Animations**: Subtle hover effects and smooth transitions
- **Emojis**: Favour emojis over icon libraries (✨🔮⭐🎱)
- **Spacing**: Generous whitespace for breathing room

## 🧪 Development Practices

- **Comments**: Add comments to explain complex logic or magical features
- **Error Handling**: User-friendly error messages with helpful suggestions
- **Loading States**: Show engaging animations while AI thinks
- **Validation**: Check user inputs are reasonable (not empty, not too long)
- **Australian English**: Use "colour" not "color", "centre" not "center"

## 🔮 AI Response Guidelines

When working with AI responses:
- Keep responses mystical but helpful (1-10 words typically)
- Include magical emojis occasionally (✨🔮⭐)
- Maintain Magic 8 Ball personality
- Handle API failures gracefully with fallback responses

## 🎯 Component Examples

### Magic Ball Component
```typescript
interface MagicBallProps {
  question: string;
  answer: string;
  isLoading: boolean;
}
```

### Question Input Component  
```typescript
interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isDisabled: boolean;
  placeholder?: string;
}
```

## 📚 Requirements Linking

Always reference our planning documents:
- [Architecture Design](docs/architecture-design.md)
- [Frontend Requirements](docs/frontend-requirements.md)  
- [Integration Requirements](docs/integration-requirements.md)

## 🌟 Student-Friendly Reminders

- **Start Simple**: Get basic functionality working before adding fancy features
- **Ask Questions**: Create GitHub issues if you're stuck
- **Test Often**: Check your changes work on different screen sizes
- **Have Fun**: This is about learning and creating something magical! ✨
- **Team Work**: Help your mates and share discoveries

## 🚀 Getting Started Tips

1. Read the requirements documents in `/docs` first
2. Start with a simple React component that displays "Hello Magic 8 Ball"
3. Add basic styling to make it look magical
4. Implement question input functionality
5. Connect to the backend API
6. Add animations and polish

Remember: Good code tells a story, and our story is about creating digital magic! 🎱✨