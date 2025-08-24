# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository is public (required for free GitHub Pages)
- Node.js and npm installed locally

## Step-by-Step Deployment

### 1. Repository Setup

1. **Ensure your repository is public**
   - Go to your repository settings
   - Scroll down to "Danger Zone"
   - Make sure the repository is public

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Click "Save"

### 2. Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment.

1. **Push your changes to the main branch**
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. **Monitor the deployment**
   - Go to the "Actions" tab in your repository
   - You should see a workflow running called "Deploy to GitHub Pages"
   - Wait for it to complete (usually takes 2-3 minutes)

3. **Access your site**
   - Once deployment is complete, your site will be available at:
   - `https://manjulsolanke.github.io`

### 3. Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install gh-pages package** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### 4. Troubleshooting

#### Common Issues:

1. **404 Errors on Refresh**
   - This is handled by the 404.html file and redirect script
   - If you still have issues, check that the 404.html file is in the public directory

2. **Assets Not Loading**
   - Ensure the base path in `vite.config.ts` is correct: `/`
   - Check that the homepage in `package.json` matches your repository name

3. **Build Failures**
   - Check the Actions tab for error messages
   - Ensure all dependencies are properly installed
   - Verify that the build works locally with `npm run build`

4. **Site Not Updating**
   - Clear your browser cache
   - Wait a few minutes for GitHub Pages to update
   - Check the Actions tab to ensure deployment completed successfully

### 5. Custom Domain (Optional)

To use a custom domain:

1. **Add a CNAME file** to the public directory with your domain
2. **Configure DNS** to point to your GitHub Pages URL
3. **Update repository settings** to use your custom domain

### 6. Performance Optimization

- Images are automatically optimized by Vite
- CSS and JS are minified and compressed
- Assets are cached for better performance

## Support

If you encounter any issues:

1. Check the GitHub Actions logs in the Actions tab
2. Verify your repository settings
3. Ensure all files are committed and pushed
4. Check that the repository is public

## Next Steps

After successful deployment:

1. **Test your site** thoroughly
2. **Update content** as needed
3. **Monitor performance** using browser dev tools
4. **Share your portfolio** with potential employers or clients

---

Your portfolio is now live! 🎉
