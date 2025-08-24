# Manjul Solanke - Portfolio Website

A professional portfolio website built with React, TypeScript, and Tailwind CSS, showcasing web development projects, experience, and skills.

## 🚀 Live Demo

Visit the live site: [https://manjulsolanke.github.io](https://manjulsolanke.github.io)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Portfolio.tsx   # Portfolio section
│   ├── Experience.tsx  # Experience section
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manjulsolanke/manjulsolanke.github.io.git
   cd manjulsolanke.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (requires gh-pages package)

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push to main branch** - The GitHub Actions workflow will automatically build and deploy your site
2. **Check deployment status** - Go to the Actions tab in your repository
3. **Access your site** - Your site will be available at `https://manjulsolanke.github.io`

### Manual Deployment

If you prefer manual deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository is public

### Environment Variables

No environment variables are required for this project.

## 📝 Customization

### Updating Content

- **Personal Information**: Update content in the respective component files
- **Styling**: Modify Tailwind classes or create custom CSS
- **Images**: Replace images in the `src/assets/` directory
- **Projects**: Update the Portfolio component with your projects

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Style with Tailwind CSS classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Name**: Manjul Solanke
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@manjulsolanke](https://github.com/manjulsolanke)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
