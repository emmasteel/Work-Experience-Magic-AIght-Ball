# 🤝 Contributing to Magic AIght Ball

G'day and welcome to the Magic AIght Ball project! 🎱 We're stoked that you want to contribute! This guide will help you get started and make meaningful contributions to our magical AI-powered fortune teller.

## 🌟 Getting Started

### Before You Begin
1. Read through the [copilot-instructions.md](./copilot-instructions.md) to understand our development approach
2. Check out the [project requirements](./docs/requirements/README.md) to understand what we're building
3. Have a look at existing issues to see what needs doing

### Your First Contribution
1. **Fork the repository** 🍴
2. **Clone your fork** locally
3. **Create a new branch** for your feature: `git checkout -b feature/awesome-new-feature`
4. **Make your changes** following our guidelines below
5. **Test your changes** thoroughly
6. **Submit a pull request** with a clear description

## 📝 Development Guidelines

### Code Style
- **TypeScript**: Use proper types, avoid `any`
- **Formatting**: We use Prettier for consistent formatting
- **Linting**: Follow ESLint rules
- **Naming**: Use descriptive, clear names
- **Comments**: Explain the "why", not just the "what"

### Commit Messages
Write clear, descriptive commit messages:
```
✨ Add magic ball shake animation

- Implement CSS animation for realistic shake effect
- Add touch/mouse event handlers
- Update component to trigger animation on user interaction
- Relates to requirement: docs/requirements/README.md#interaction-design
```

### Branch Naming
Use descriptive branch names:
- `feature/magic-ball-animation` - New features
- `bugfix/response-display-issue` - Bug fixes
- `docs/api-documentation` - Documentation updates
- `refactor/component-structure` - Code refactoring

## 🧪 Testing

### Frontend Testing
- Write tests for all React components
- Use React Testing Library for component tests
- Test user interactions and edge cases
- Ensure accessibility in tests

### Backend Testing
- Write unit tests for all API endpoints
- Test error handling scenarios
- Mock external services (Azure OpenAI)
- Test input validation and sanitisation

### Running Tests
```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && npm test

# All tests
npm run test:all
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions and components
- Link back to requirement documents in comments
- Update README files when adding new features
- Include examples in API documentation

### Requirement Linking
Always reference relevant requirements in your code:
```typescript
/**
 * Magic Ball Component
 * Implements: docs/requirements/README.md#magic-ball-visual
 */
export const MagicBall: React.FC = () => {
  // Component implementation
};
```

## 🔄 Pull Request Process

### Before Submitting
- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No merge conflicts

### PR Description Template
```markdown
## 🎯 What does this PR do?
Brief description of the changes.

## 📋 Requirements
- Links to relevant requirement documents
- Issue numbers this PR addresses

## 🧪 Testing
- [ ] Tests written and passing
- [ ] Manual testing completed
- [ ] Edge cases considered

## 📸 Screenshots
If UI changes, include before/after screenshots.

## 🔗 Related Issues
Closes #123
Relates to #456
```

## 🐛 Bug Reports

When reporting bugs, include:
- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behaviour**
- **Environment details** (browser, device, etc.)
- **Screenshots** if applicable

Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) for consistency.

## ✨ Feature Requests

For new features:
- **Describe the problem** you're trying to solve
- **Propose a solution** with details
- **Consider the impact** on existing functionality
- **Think about user experience** across devices

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

## 🎨 UI/UX Contributions

### Design Guidelines
- **Mobile-first**: Design for mobile, enhance for desktop
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Emoji over icons**: Use emoji where possible for fun
- **Australian English**: Use correct spelling and terminology
- **Consistent spacing**: Follow the design system

### Visual Assets
- **SVG preferred**: For scalable graphics
- **Optimised images**: Compress images for web
- **Responsive design**: Test on multiple screen sizes
- **Dark theme**: Consider our mystical dark theme

## 🚀 Deployment

### Environment Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development servers
npm run dev
```

### Production Considerations
- Environment variables are properly configured
- API endpoints are secured
- Performance is optimised
- Error handling is comprehensive

## 💬 Getting Help

### Where to Ask Questions
- **GitHub Issues**: For bug reports and feature requests
- **Pull Request Comments**: For code-specific questions
- **Project Discussions**: For general project questions

### Response Times
- We aim to respond to issues within 24 hours
- Pull requests are typically reviewed within 48 hours
- Be patient - everyone here is learning and helping in their spare time!

## 🎉 Recognition

### Contributors
All contributors are acknowledged in our README
- Code contributions
- Documentation improvements
- Bug reports and testing
- Design and UX contributions

### Student Contributions
Special recognition for work experience students:
- Learning achievements celebrated
- Mentoring opportunities provided
- Portfolio-worthy contributions highlighted

## 📜 Code of Conduct

### Our Standards
- **Be respectful**: Treat everyone with kindness and respect
- **Be inclusive**: Welcome people of all backgrounds and experience levels
- **Be helpful**: Share knowledge and help others learn
- **Be patient**: Remember everyone is learning
- **Have fun**: This is meant to be an enjoyable experience!

### Unacceptable Behaviour
- Harassment or discrimination of any kind
- Trolling or deliberately unhelpful comments
- Sharing inappropriate content
- Violating privacy or security

## 🎁 Thank You!

Thank you for contributing to Magic AIght Ball! Every contribution, no matter how small, helps make this project better and more magical. 

Remember: **The best code is the code that works and helps others learn!** ✨

---

**Questions?** Don't hesitate to ask! We're all here to help each other succeed. 🤝