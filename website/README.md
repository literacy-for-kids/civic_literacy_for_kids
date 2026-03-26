# Civic Literacy Curriculum - Docusaurus Website

This website contains a Civic Literacy Curriculum designed for kids. It's built with [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.0 or above)
- npm (comes with Node.js)

### Local Development

1. **Install Dependencies**
   ```bash
   cd website
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run start
   ```
   
   This command starts a local development server and opens your browser to `http://localhost:3000`. Most changes are reflected live without having to restart the server.

3. **Build for Production**
   ```bash
   npm run build
   ```
   
   This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Configuration

### Site Configuration

The main site configuration is in `docusaurus.config.js`. Key settings include:

- **Site Info**: Title, tagline, favicon
- **Deployment**: GitHub Pages configuration
- **Navigation**: Navbar and footer links
- **Theme**: Colors and styling options

### Sidebar Configuration

The documentation sidebar is configured in `sidebars.js`.

## Deployment

### Automatic Deployment (Recommended)

This site is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Push to Main Branch**: Any push to the `main` branch triggers the deployment workflow
2. **GitHub Actions**: The workflow builds the site and deploys it to the `gh-pages` branch
3. **GitHub Pages**: Serves the site from the `gh-pages` branch

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# Deploy to GitHub Pages (requires proper git configuration)
npm run deploy
```

## Project Structure

```
website/
├── blog/                   # Blog posts
├── docs/                   # Documentation/curriculum content
├── src/
│   ├── components/         # React components
│   ├── css/               # Custom CSS
│   └── pages/             # Static pages
├── static/                # Static assets
├── docusaurus.config.js   # Site configuration
├── package.json           # Dependencies and scripts
├── sidebars.js            # Sidebar configuration
└── README.md              # This file
```
