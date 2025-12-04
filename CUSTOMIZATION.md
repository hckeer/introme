# 🎨 Complete Customization Guide

This guide will walk you through customizing every aspect of your portfolio to make it truly yours.

## Table of Contents

1. [Quick Start Checklist](#quick-start-checklist)
2. [Personal Information](#personal-information)
3. [Content Sections](#content-sections)
4. [Design & Styling](#design--styling)
5. [Images & Assets](#images--assets)
6. [Advanced Features](#advanced-features)

## Quick Start Checklist

Before deploying, complete these essential customizations:

- [ ] Update personal information in `_config.yml`
- [ ] Replace all placeholder images
- [ ] Update About Me section
- [ ] Add your actual projects
- [ ] Update skills and percentages
- [ ] Add your resume PDF
- [ ] Update social media links
- [ ] Change repository URL in README
- [ ] Test contact form
- [ ] Update favicon

## Personal Information

### File: `_config.yml`

```yaml
# Site Settings
title: John Doe - Developer Portfolio
email: john.doe@example.com
description: >-
  Full Stack Developer specializing in React and Node.js.
  Passionate about creating exceptional user experiences.

# Author Info
author:
  name: John Doe
  title: Full Stack Developer
  tagline: Building the future, one line of code at a time
  bio: >-
    I'm a passionate full-stack developer with 5+ years of experience
    building web applications. I specialize in React, Node.js, and cloud
    technologies. I love solving complex problems with elegant solutions.
  location: San Francisco, CA

# Social Links
social:
  github: johndoe
  linkedin: john-doe-dev
  twitter: johndoedev
  email: john.doe@example.com

# URL Configuration
url: "https://johndoe.github.io"
baseurl: "" # Leave empty for username.github.io
```

## Content Sections

### Hero Section

**Location**: `index.html` (lines 6-78)

**What to change**:
- Greeting text
- Name (automatically pulled from config)
- Job title (automatically pulled from config)
- Tagline (automatically pulled from config)
- Button text and links

**Example**:
```html
<p class="hero-greeting">Hi there! I'm</p>
<!-- Name comes from _config.yml -->

<!-- To change button text -->
<a href="#projects" class="btn btn-primary">
    <span>Explore My Work</span> <!-- Change this -->
    <i class="fas fa-arrow-right"></i>
</a>
```

### About Section

**Location**: `index.html` (lines 82-137)

**What to customize**:

1. **Bio** (automatically from `_config.yml` or override):
```html
<p class="about-description">
    {{ site.author.bio | default: "Your custom bio here..." }}
</p>
```

2. **Info Cards**:
```html
<div class="info-item" data-aos="zoom-in" data-aos-delay="100">
    <div class="info-icon">
        <i class="fas fa-graduation-cap"></i> <!-- Change icon -->
    </div>
    <div class="info-content">
        <h4>Education</h4>
        <p>B.S. Computer Science</p> <!-- Update degree -->
    </div>
</div>
```

**Common Font Awesome Icons**:
- Education: `fa-graduation-cap`
- Experience: `fa-briefcase`
- Projects: `fa-project-diagram`
- Awards: `fa-trophy`
- Certification: `fa-certificate`

### Skills Section

**Location**: `index.html` (lines 141-334)

**Structure**: Skills are organized into categories (Frontend, Backend, Tools)

**Adding a new skill**:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-python"></i> <!-- Icon -->
    </div>
    <div class="skill-info">
        <h4>Python</h4> <!-- Skill name -->
        <div class="skill-bar">
            <div class="skill-progress" data-progress="85"></div> <!-- Progress % -->
        </div>
        <span class="skill-percentage">85%</span> <!-- Display % -->
    </div>
</div>
```

**Icon References**:
- HTML: `fab fa-html5`
- CSS: `fab fa-css3-alt`
- JavaScript: `fab fa-js`
- React: `fab fa-react`
- Vue: `fab fa-vuejs`
- Angular: `fab fa-angular`
- Node.js: `fab fa-node-js`
- Python: `fab fa-python`
- Java: `fab fa-java`
- PHP: `fab fa-php`
- Git: `fab fa-git-alt`
- Docker: `fab fa-docker`
- AWS: `fab fa-aws`
- Database: `fas fa-database`

**Adding a new category**:

```html
<div class="skill-category" data-aos="fade-up" data-aos-delay="400">
    <div class="category-header">
        <i class="fas fa-mobile-alt"></i> <!-- Category icon -->
        <h3>Mobile Development</h3> <!-- Category name -->
    </div>
    <div class="skills-grid">
        <!-- Add skill cards here -->
    </div>
</div>
```

### Projects Section

**Location**: `index.html` (lines 338-487)

**Customizing a project**:

```html
<div class="project-card" data-aos="zoom-in" data-aos-delay="100">
    <div class="project-image">
        <!-- Update image path -->
        <img src="{{ '/assets/images/project-1.jpg' | relative_url }}" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <!-- Update GitHub URL -->
                <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                <!-- Update live demo URL -->
                <a href="https://project-demo.com" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <!-- Update title -->
        <h3 class="project-title">Your Project Name</h3>

        <!-- Update description -->
        <p class="project-description">
            Detailed description of what the project does and your role in it.
        </p>

        <!-- Update tech stack -->
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
    </div>
</div>
```

**Adding more projects**: Copy the entire `<div class="project-card">` block and paste it in the `projects-grid` div.

### Contact Section

**Location**: `index.html` (lines 491-604)

**Update contact details**:

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Location -->
<p>Your City, State/Country</p>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile">Connect with me</a>
```

**Form integration**: See README.md for Formspree, Netlify Forms, or EmailJS integration.

## Design & Styling

### Color Scheme

**File**: `assets/css/main.scss` (lines 9-40)

```scss
:root {
  /* Primary Colors - Change these for your brand */
  --primary-color: #6366f1;      // Indigo (main brand color)
  --primary-light: #818cf8;      // Lighter variant
  --primary-dark: #4f46e5;       // Darker variant
  --secondary-color: #ec4899;    // Pink (accent)
  --accent-color: #14b8a6;       // Teal (success/highlights)
}
```

**Popular color palettes**:

1. **Blue & Orange**:
```scss
--primary-color: #2563eb;
--secondary-color: #f97316;
--accent-color: #06b6d4;
```

2. **Purple & Green**:
```scss
--primary-color: #9333ea;
--secondary-color: #22c55e;
--accent-color: #f59e0b;
```

3. **Red & Cyan**:
```scss
--primary-color: #ef4444;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
```

### Typography

**File**: `assets/css/main.scss` (lines 31-35)

```scss
:root {
  --font-primary: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-size-base: 16px;
  --line-height: 1.6;
}
```

**Changing fonts**:

1. Find fonts on [Google Fonts](https://fonts.google.com/)
2. Update link in `_layouts/default.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```
3. Update CSS variable:
```scss
--font-primary: 'Poppins', sans-serif;
```

### Spacing & Layout

**File**: `assets/css/main.scss`

```scss
:root {
  --container-width: 1200px;    // Max content width
  --section-padding: 100px 0;   // Vertical section spacing
  --gap: 2rem;                  // General gap between elements
}
```

**Adjust for different screen sizes**:
```scss
@media screen and (max-width: 968px) {
  :root {
    --container-width: 100%;
    --section-padding: 60px 0;
  }
}
```

### Animations

**Scroll animation settings**:

**File**: `assets/js/main.js` (lines 279-285)

```javascript
AOS.init({
  duration: 1000,      // Animation duration in ms
  easing: 'ease-in-out', // Easing function
  once: true,          // Animation happens only once
  mirror: false,       // Don't reverse on scroll up
  offset: 100          // Offset from trigger point
});
```

**Particle.js settings**:

**File**: `assets/js/main.js` (lines 181-244)

```javascript
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,  // Number of particles (increase for more density)
    },
    color: {
      value: '#6366f1'  // Particle color (match your primary color)
    },
    // More settings...
  }
});
```

## Images & Assets

### Required Images

Create an `/assets/images/` directory with:

1. **profile.jpg** (450x450px)
   - Your professional headshot
   - Square format, centered
   - High resolution, good lighting

2. **about.jpg** (600x800px)
   - Casual or professional photo
   - Portrait orientation
   - Shows personality

3. **project-1.jpg to project-4.jpg** (600x400px)
   - Project screenshots or mockups
   - Landscape orientation
   - Show key features

4. **favicon.png** (32x32px or 64x64px)
   - Small icon for browser tab
   - Simple, recognizable design

### Image Optimization Tips

1. **Compress images**:
   - Use [TinyPNG](https://tinypng.com/)
   - Or [Squoosh](https://squoosh.app/)
   - Target < 200KB per image

2. **Format recommendations**:
   - Photos: JPG (better compression)
   - Graphics/Icons: PNG (transparency support)
   - Modern browsers: WebP (best compression)

3. **Naming convention**:
   - Use lowercase
   - Use hyphens, not spaces
   - Be descriptive: `ecommerce-project.jpg`

### Resume/CV

**File**: `/assets/resume.pdf`

- Export as PDF
- Keep under 2MB
- Ensure text is selectable (not scanned image)
- Update filename in `index.html` if different

## Advanced Features

### Adding Custom Sections

1. **Create the HTML** in `index.html`:
```html
<section id="testimonials" class="testimonials section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-label">What People Say</span>
            <h2 class="section-title">Testimonials</h2>
            <div class="section-divider"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

2. **Add navigation link** in `_includes/header.html`:
```html
<li class="nav-item">
    <a href="#testimonials" class="nav-link">
        <i class="fas fa-comments"></i>
        <span>Testimonials</span>
    </a>
</li>
```

3. **Style it** in `assets/css/main.scss`:
```scss
.testimonials {
  background: var(--bg-secondary);
  // Your styles here
}
```

### Dark/Light Theme Customization

**File**: `assets/css/main.scss` (lines 44-64)

```scss
[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  // Customize light theme colors
}
```

### Changing Animation Effects

**File**: `index.html`

AOS animation options:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `slide-up`, `slide-down`

Example:
```html
<div data-aos="flip-left" data-aos-delay="200">
```

### Mobile Menu Customization

**File**: `assets/css/main.scss` (lines 826-880)

Adjust mobile breakpoint:
```scss
@media screen and (max-width: 968px) {
  // Mobile styles
}
```

Change to tablet/smaller screens:
```scss
@media screen and (max-width: 768px) {
```

## Testing Your Changes

### Local Testing

```bash
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000`

### Check These Items

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Responsive on mobile (use browser DevTools)
- [ ] Dark/light theme toggle works
- [ ] Form validation works
- [ ] No console errors
- [ ] All social links correct

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Common Customization Scenarios

### 1. "I want a minimalist design"

- Reduce animations: Set `duration: 0` in AOS
- Simplify colors: Use monochrome palette
- Remove particles: Comment out particles.js code
- Clean layout: Increase whitespace in CSS

### 2. "I want more projects"

- Copy project card HTML
- Adjust grid: Change `minmax(300px, 1fr)` to `minmax(280px, 1fr)` for smaller cards
- Consider pagination for 10+ projects

### 3. "I want to add a blog"

See Advanced Configuration in README.md

### 4. "Different layout for skills"

Current: Progress bars
Alternative: Skill clouds, badges, or simple lists

Example skill badge:
```html
<div class="skill-badges">
    <span class="badge">JavaScript</span>
    <span class="badge">React</span>
    <!-- etc -->
</div>
```

```scss
.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
}
```

## Need More Help?

- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **AOS Documentation**: https://michalsnik.github.io/aos/
- **CSS Custom Properties**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

## Pro Tips

1. **Make incremental changes**: Test after each change
2. **Use version control**: Commit working versions
3. **Keep backups**: Save original files before major changes
4. **Mobile-first**: Always check mobile view
5. **Performance**: Keep images optimized
6. **Accessibility**: Maintain semantic HTML and ARIA labels

---

Happy customizing! 🎨
