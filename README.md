# DuckNGood Restaurant Website

A modern, responsive web application for DuckNGood, a Michelin-starred French restaurant specializing in duck cuisine.

## 🚀 Features

- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS
- **Menu Management**: Dynamic menu system with admin panel
- **Responsive Design**: Mobile-first design with touch-friendly interactions
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Built with Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd duckngood-webpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── menu/              # Menu page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── ui/                # Reusable UI components
├── context/               # React Context providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   └── constants.ts       # Application constants
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## 🎨 Code Quality

This project uses ESLint and Prettier for code quality and formatting.

- **Linting**: `npm run lint`
- **Auto-fix**: `npm run lint:fix`
- **Formatting**: `npm run format`

Pre-commit hooks are configured to automatically run linting and formatting.

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests: `npm run test`
5. Run linting: `npm run lint`
6. Commit with conventional commits: `git commit -m "feat: add new feature"`
7. Push to your branch: `git push origin feature/your-feature-name`
8. Create a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Testing
- `chore:` - Maintenance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: DuckNGood Tech Team
- **Design**: DuckNGood Creative Team
- **Contact**: hello@duckngood.com

## 🔒 Security

For security issues, please email security@duckngood.com instead of creating a public issue.

## 📊 Performance

This application is optimized for performance with:

- Next.js App Router for efficient routing
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS for optimized styling

---

Made with ❤️ for the finest duck cuisine experience.
