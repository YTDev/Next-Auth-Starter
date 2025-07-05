# 🚀 Next.js OAuth Starter Template

A modern, production-ready Next.js 15 template with **Auth.js (NextAuth.js v5)**, **Prisma ORM**, **PostgreSQL**, and **Shadcn UI**. Perfect for building secure, scalable web applications with OAuth authentication.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Auth.js](https://img.shields.io/badge/Auth.js-5.0--beta.29-green?style=for-the-badge&logo=auth.js)
![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-336791?style=for-the-badge&logo=postgresql)

## ✨ Features

- 🔐 **OAuth Authentication** - Google, GitHub, and Discord providers
- 🎨 **Modern UI** - Shadcn UI components with Tailwind CSS v4
- 🗄️ **Database** - Prisma ORM with PostgreSQL (Neon)
- 🔄 **Account Linking** - Automatic linking of multiple OAuth providers
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Performance** - Next.js 15 with Turbopack
- 🛡️ **Type Safety** - Full TypeScript support
- 🚀 **Production Ready** - Optimized for Vercel deployment

### 🎯 Lighthouse Scores

| Category           | Score   |
| ------------------ | ------- |
| **Performance**    | 100/100 |
| **Accessibility**  | 100/100 |
| **Best Practices** | 100/100 |
| **SEO**            | 100/100 |

## 🏗️ Architecture

```
├── app/                    # Next.js 15 App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   └── (marketing)/       # Public marketing pages
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── prisma/              # Database schema and migrations
└── types/               # TypeScript type definitions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- OAuth app credentials for Google, GitHub, and/or Discord

### 1. Clone and Install

```bash
git clone https://github.com/YTDev/Next-Auth-Starter.git
cd next-auth-starter
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Auth.js
AUTH_SECRET="your-super-secret-key-here"
AUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

DISCORD_CLIENT_ID="your-discord-client-id"
DISCORD_CLIENT_SECRET="your-discord-client-secret"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

### 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 🔧 OAuth Provider Setup

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### Discord OAuth

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Add OAuth2 redirect: `http://localhost:3000/api/auth/callback/discord`

## 📁 Project Structure

### Key Files

- `app/api/auth/[...nextauth]/route.ts` - Auth.js configuration
- `prisma/schema.prisma` - Database schema
- `components/auth-card.tsx` - Authentication UI component
- `app/(dashboard)/dashboard/page.tsx` - Protected dashboard
- `middleware.ts` - Route protection middleware

## 🎨 Customization

### Adding New OAuth Providers

1. Install the provider package (if needed)
2. Add provider configuration in `app/api/auth/[...nextauth]/route.ts`
3. Add environment variables
4. Update the UI components

### Styling

The template uses Tailwind CSS v4 with Shadcn UI components. Customize by:

- Modifying `tailwind.config.ts`
- Updating component variants in `components/ui/`
- Adding custom CSS in `app/globals.css`

### Database Changes

```bash
# After modifying schema.prisma
npx prisma generate
npx prisma db push
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```env
# Update AUTH_URL to your production domain
AUTH_URL="https://your-domain.vercel.app"

# Update OAuth redirect URIs
# Google: https://your-domain.vercel.app/api/auth/callback/google
# GitHub: https://your-domain.vercel.app/api/auth/callback/github
# Discord: https://your-domain.vercel.app/api/auth/callback/discord
```

### Database Migration

```bash
# For production database
npx prisma db push
```

## 🔒 Security Features

- **CSRF Protection** - Built into Auth.js
- **Session Management** - Secure session handling
- **Account Linking** - Automatic linking of multiple providers
- **Environment Variables** - Secure credential management
- **Type Safety** - Prevents runtime errors

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

- [Auth.js](https://authjs.dev/) for authentication
- [Shadcn UI](https://ui.shadcn.com/) for components
- [Prisma](https://www.prisma.io/) for database ORM
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ by YTDev**
