# Contributing to DuckNGood

Thank you for your interest in contributing to DuckNGood! We welcome contributions from the community.

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors.

## How to Contribute

### 1. Development Setup

Follow the setup instructions in the [README.md](README.md).

### 2. Finding Issues

- Check the [Issues](../../issues) tab for open issues
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to indicate you're working on it

### 3. Making Changes

1. **Create a branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:

   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

4. **Commit your changes** using conventional commits:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### 4. Pull Request Process

1. **Update your branch** with the latest changes from main:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**:
   - Use a clear, descriptive title
   - Fill out the PR template
   - Reference any related issues
   - Add screenshots for UI changes

4. **Code Review**:
   - Address any feedback from reviewers
   - Make sure all CI checks pass

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types for function parameters and return values
- Use interfaces for object shapes
- Avoid `any` type - use proper typing

### React

- Use functional components with hooks
- Use TypeScript for component props
- Follow the component naming convention: PascalCase
- Use meaningful component and prop names

### Styling

- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use semantic class names
- Maintain consistency with existing design patterns

### Testing

- Write tests for new features
- Aim for good test coverage
- Use descriptive test names
- Test both success and error scenarios

### Commits

- Use conventional commit format
- Write clear, concise commit messages
- Reference issue numbers when applicable

## Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

### Examples:

```
feat: add user authentication
fix: resolve menu loading issue
docs: update API documentation
style: format code with prettier
refactor: simplify menu component logic
test: add tests for menu filtering
chore: update dependencies
```

## File Organization

- `app/`: Next.js pages and layouts
- `components/`: Reusable React components
  - `ui/`: Generic UI components
  - `layout/`: Layout-specific components
- `lib/`: Utility functions and services
- `hooks/`: Custom React hooks
- `types/`: TypeScript type definitions
- `utils/`: Helper functions

## Testing Guidelines

- Write unit tests for utilities and hooks
- Write integration tests for components
- Use React Testing Library for component testing
- Mock external dependencies
- Aim for 80%+ code coverage

## Performance

- Optimize images and assets
- Use Next.js Image component for images
- Implement lazy loading where appropriate
- Minimize bundle size
- Use React.memo for expensive components

## Security

- Never commit API keys or sensitive data
- Use environment variables for configuration
- Validate user inputs
- Follow security best practices for authentication

## Questions?

If you have questions about contributing, please:

1. Check the [README.md](README.md) for setup instructions
2. Look at existing issues and PRs for examples
3. Ask in the issue comments or create a discussion

Thank you for contributing to DuckNGood! 🎉
