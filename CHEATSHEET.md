# ⚡ Quick Reference Cheatsheet

Fast reference for common tasks and commands.

## 🚀 Quick Commands

```bash
# Start local server
bundle exec jekyll serve

# Start with live reload
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Update dependencies
bundle update

# Install dependencies
bundle install

# Check for issues
bundle exec jekyll doctor
```

## 📝 Quick Edits

### Change Personal Info
**File**: `_config.yml`
```yaml
author:
  name: Your Name              # Line 14
  title: Your Job Title        # Line 15
  tagline: Your Tagline        # Line 16

social:
  github: yourusername         # Line 24
  linkedin: yourprofile        # Line 25
  email: your.email@example.com # Line 27
```

### Change Colors
**File**: `assets/css/main.scss` (Lines 11-20)
```scss
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --secondary-color: #ec4899;  /* Accent color */
  --accent-color: #14b8a6;     /* Tertiary color */
}
```

### Update About Section
**File**: `index.html` (Line ~93)
```html
<p class="about-description">
    Your bio text here...
</p>
```

### Add a Skill
**File**: `index.html` (Copy this block in skills section)
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-react"></i>  <!-- Icon -->
    </div>
    <div class="skill-info">
        <h4>React</h4>                <!-- Name -->
        <div class="skill-bar">
            <div class="skill-progress" data-progress="85"></div>
        </div>
        <span class="skill-percentage">85%</span>
    </div>
</div>
```

### Add a Project
**File**: `index.html` (Copy this block in projects section)
```html
<div class="project-card" data-aos="zoom-in">
    <div class="project-image">
        <img src="{{ '/assets/images/project-1.jpg' | relative_url }}" alt="Project">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://github.com/user/repo">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://demo.com">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

## 🎨 Color Schemes

### Blue & Orange (Tech)
```scss
--primary-color: #2563eb;
--secondary-color: #f97316;
--accent-color: #06b6d4;
```

### Purple & Green (Creative)
```scss
--primary-color: #9333ea;
--secondary-color: #22c55e;
--accent-color: #f59e0b;
```

### Red & Cyan (Bold)
```scss
--primary-color: #ef4444;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
```

### Teal & Pink (Modern)
```scss
--primary-color: #14b8a6;
--secondary-color: #ec4899;
--accent-color: #8b5cf6;
```

## 🔤 Font Awesome Icons

### Common Icons
```html
<!-- Social -->
<i class="fab fa-github"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-twitter"></i>
<i class="fas fa-envelope"></i>

<!-- Tech -->
<i class="fab fa-html5"></i>
<i class="fab fa-css3-alt"></i>
<i class="fab fa-js"></i>
<i class="fab fa-react"></i>
<i class="fab fa-node-js"></i>
<i class="fab fa-python"></i>

<!-- UI -->
<i class="fas fa-home"></i>
<i class="fas fa-user"></i>
<i class="fas fa-code"></i>
<i class="fas fa-folder"></i>
<i class="fas fa-envelope"></i>
<i class="fas fa-bars"></i>
<i class="fas fa-times"></i>
```

Find more: https://fontawesome.com/icons

## 🎬 AOS Animations

### Available Effects
```html
<!-- Fade -->
data-aos="fade-up"
data-aos="fade-down"
data-aos="fade-left"
data-aos="fade-right"

<!-- Zoom -->
data-aos="zoom-in"
data-aos="zoom-out"

<!-- Flip -->
data-aos="flip-left"
data-aos="flip-right"

<!-- Slide -->
data-aos="slide-up"
data-aos="slide-down"

<!-- With delay -->
data-aos="fade-up" data-aos-delay="200"
```

## 📱 Responsive Breakpoints

```scss
/* Desktop */
@media screen and (min-width: 1200px) { }

/* Tablet */
@media screen and (max-width: 968px) { }

/* Mobile */
@media screen and (max-width: 576px) { }
```

## 🔧 Git Commands

```bash
# Initialize repo
git init

# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Add remote
git remote add origin https://github.com/user/repo.git

# Push to GitHub
git push -u origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# View changes
git diff
```

## 🌐 Deployment Checklist

- [ ] Update `_config.yml` with your info
- [ ] Edit `index.html` content
- [ ] Add images to `/assets/images/`
- [ ] Add resume to `/assets/resume.pdf`
- [ ] Test locally: `bundle exec jekyll serve`
- [ ] Create GitHub repo
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] Set source to "GitHub Actions"
- [ ] Wait for deployment
- [ ] Visit your site!

## 🐛 Troubleshooting

### Build fails locally
```bash
# Update dependencies
bundle update

# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll build
```

### Build fails on GitHub
- Check Actions tab for errors
- Verify `_config.yml` syntax
- Ensure Ruby version in workflow
- Check all files are committed

### Styles not loading
```yaml
# In _config.yml:
url: "https://yourusername.github.io"
baseurl: ""  # Empty for username.github.io
```

### Port already in use
```bash
# Use different port
bundle exec jekyll serve --port 4001
```

### Images not showing
- Check file names (case-sensitive)
- Verify paths in HTML
- Ensure images in correct directory
- Check image file extensions

## 📊 Image Sizes

```
profile.jpg:    450x450px  (square)
about.jpg:      600x800px  (portrait)
project-*.jpg:  600x400px  (landscape)
favicon.png:    32x32px or 64x64px
```

Compress with: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

## 🎯 File Locations Quick Reference

```
Personal Info:         _config.yml
Main Content:          index.html
Colors:                assets/css/main.scss (line 11-20)
Interactivity:         assets/js/main.js
Navigation:            _includes/header.html
Footer:                _includes/footer.html
Images:                assets/images/
Resume:                assets/resume.pdf
Deployment:            .github/workflows/deploy.yml
```

## 🔗 Useful Links

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/
- **AOS Library**: https://michalsnik.github.io/aos/
- **GitHub Pages**: https://pages.github.com/
- **Liquid Syntax**: https://shopify.github.io/liquid/

## 💡 Pro Tips

```bash
# Development workflow
1. Edit files
2. Save
3. Check browser (auto-refresh with --livereload)
4. Commit: git add . && git commit -m "message"
5. Push: git push
6. Check live site

# Before major changes
git checkout -b experiment
# Make changes, test
git checkout main  # Go back if needed

# Quick commit
git add . && git commit -m "Update content" && git push
```

## 📞 Quick Support

**Issue**: Build fails
**Solution**: Check Actions tab on GitHub for error details

**Issue**: Site not updating
**Solution**: Wait 2-3 minutes, clear browser cache

**Issue**: Colors wrong
**Solution**: Check CSS variables in `main.scss`

**Issue**: Animations not working
**Solution**: Verify AOS library loaded in browser console

## 🎓 Learning Path

1. ✅ Get site running (QUICKSTART.md)
2. ✅ Customize content (CUSTOMIZATION.md)
3. ✅ Understand features (FEATURES.md)
4. ✅ Learn structure (PROJECT_STRUCTURE.md)
5. ✅ Master Jekyll (https://jekyllrb.com/)

---

**Print this and keep it handy!** 📌

For detailed info, see:
- `QUICKSTART.md` - Fast setup
- `CUSTOMIZATION.md` - Detailed customization
- `README.md` - Complete documentation
