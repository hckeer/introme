# 🚀 Modern Developer Portfolio

[![Deploy Jekyll site to GitHub Pages](https://github.com/yourusername/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/portfolio/actions/workflows/deploy.yml)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3.0-red.svg)](https://jekyllrb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A stunning, modern developer portfolio website built with Jekyll, featuring smooth animations, dark/light theme toggle, and automated deployment to GitHub Pages.

## ✨ Features

- **🎨 Modern Design**: Sleek, professional aesthetic with gradient accents and glassmorphism effects
- **🌓 Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **⚡ Smooth Animations**:
  - Scroll-triggered animations (AOS)
  - Particle.js background effects
  - Typing animation in hero section
  - Animated skill progress bars
  - Hover effects and micro-interactions
- **🔧 Interactive Features**:
  - Smooth scroll navigation
  - Mobile-friendly hamburger menu
  - Back-to-top button
  - Form validation with real-time feedback
  - 3D tilt effect on project cards
- **🚀 Performance Optimized**: Fast loading, minified CSS, optimized images
- **♿ Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **🔄 CI/CD Ready**: Automated deployment via GitHub Actions
- **📊 SEO Friendly**: Meta tags, sitemap, structured data

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Me**: Professional bio with education, experience, and achievements
3. **Skills**: Categorized technical skills with animated progress bars
4. **Projects**: Showcase of best work with hover effects and live/GitHub links
5. **Contact**: Contact form with validation and social media links

## 🛠️ Tech Stack

- **Framework**: Jekyll 4.3.0
- **Styling**: SCSS with CSS custom properties
- **JavaScript**: Vanilla JS (no frameworks)
- **Animations**: AOS (Animate On Scroll), Particles.js
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter, Space Grotesk (Google Fonts)
- **Deployment**: GitHub Actions → GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Ruby (version 3.0 or higher)
- RubyGems
- GCC and Make
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

### Live Reload (Optional)

For automatic browser refresh on file changes:
```bash
bundle exec jekyll serve --livereload
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `_config.yml`:

```yaml
title: Your Name - Developer Portfolio
email: your.email@example.com
description: Your tagline here

author:
  name: Your Name
  title: Your Job Title
  tagline: Your professional tagline
  bio: Your professional bio
  location: Your City, Country

social:
  github: yourusername
  linkedin: yourprofile
  twitter: yourhandle
  email: your.email@example.com

url: "https://yourusername.github.io"
```

### 2. Content Updates

**About Section**: Edit `index.html` lines 82-137
- Update your bio
- Change education, experience, and project count

**Skills Section**: Edit `index.html` lines 141-334
- Add/remove skill categories
- Update skill names and percentages
- Change icons (Font Awesome classes)

**Projects Section**: Edit `index.html` lines 338-487
- Update project titles and descriptions
- Change tech stack tags
- Add GitHub and live demo links
- Replace project images

### 3. Images

Replace the following images in `/assets/images/`:
- `profile.jpg` - Your profile photo (hero section)
- `about.jpg` - About section image
- `project-1.jpg` through `project-4.jpg` - Project screenshots
- `favicon.png` - Browser favicon

**Recommended image sizes:**
- Profile: 450x450px (square)
- About: 600x800px (portrait)
- Projects: 600x400px (landscape)
- Favicon: 32x32px or 64x64px

### 4. Colors & Theme

Edit CSS custom properties in `assets/css/main.scss`:

```scss
:root {
  --primary-color: #6366f1;      // Main brand color
  --secondary-color: #ec4899;    // Accent color
  --accent-color: #14b8a6;       // Tertiary color

  // Add your color palette
}
```

### 5. Resume/CV

Replace `/assets/resume.pdf` with your actual resume.

### 6. Fonts

To change fonts, update Google Fonts import in `_layouts/default.html` and CSS variables in `assets/css/main.scss`.

## 🚀 Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. **Create a GitHub repository**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   ```

2. **Update `_config.yml`**
   ```yaml
   url: "https://yourusername.github.io"
   baseurl: "" # or "/repository-name" if not using username.github.io
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

4. **Push your code**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

5. **Visit your site**
   Your portfolio will be live at `https://yourusername.github.io`

### Option 2: Manual Build

1. Build the site locally:
   ```bash
   JEKYLL_ENV=production bundle exec jekyll build
   ```

2. Deploy the `_site` folder to your hosting provider

## 🔧 Advanced Configuration

### Adding a Blog

1. Create `_posts` directory
2. Add blog post files (YYYY-MM-DD-title.md)
3. Create a blog layout in `_layouts/post.html`
4. Add blog section to navigation

### Analytics

Add Google Analytics by including the tracking code in `_layouts/default.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Contact Form Integration

The contact form currently has a simulated submission. To connect a real backend:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Option 2: Netlify Forms** (if hosting on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option 3: EmailJS**
Integrate EmailJS for client-side email sending.

### Custom Domain

1. Add a `CNAME` file to the root with your domain:
   ```
   www.yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Type: CNAME
   - Name: www
   - Value: yourusername.github.io

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── _includes/
│   ├── header.html             # Navigation header
│   └── footer.html             # Site footer
├── _layouts/
│   └── default.html            # Main layout template
├── assets/
│   ├── css/
│   │   └── main.scss          # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Custom JavaScript
│   │   └── particles.min.js   # Particles library
│   ├── images/                # Image assets
│   └── resume.pdf             # Downloadable resume
├── _config.yml                # Jekyll configuration
├── Gemfile                    # Ruby dependencies
├── index.html                 # Homepage
├── .gitignore                 # Git ignore file
└── README.md                  # This file
```

## 🎨 Design Credits & Inspiration

This portfolio uses:
- **AOS**: [Animate On Scroll Library](https://michalsnik.github.io/aos/)
- **Particles.js**: [Particle Effects](https://vincentgarreau.com/particles.js/)
- **Font Awesome**: [Icon Library](https://fontawesome.com/)
- **Google Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

## 🐛 Troubleshooting

### Build fails on GitHub Actions

- Check Ruby version compatibility in `.github/workflows/deploy.yml`
- Ensure all dependencies are listed in `Gemfile`
- Verify `_config.yml` syntax

### Styles not loading

- Check that `baseurl` in `_config.yml` matches your repository setup
- Clear browser cache
- Verify CSS file path in `_layouts/default.html`

### Animations not working

- Check browser console for JavaScript errors
- Ensure AOS and Particles.js are loading correctly
- Verify internet connection for CDN resources

### Images not displaying

- Verify image paths match file names
- Check image file extensions (case-sensitive)
- Ensure images are in `/assets/images/` directory

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## ⭐ Show Your Support

If this portfolio helped you, please give it a ⭐!

## 📬 Contact

**Your Name**
- Website: [yourusername.github.io](https://yourusername.github.io)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

<p align="center">Made with ❤️ and <a href="https://jekyllrb.com/">Jekyll</a></p>
<p align="center">
  <a href="#top">Back to top ⬆️</a>
</p>
# introme
