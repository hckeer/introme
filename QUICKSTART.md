# ⚡ Quick Start Guide

Get your portfolio live in 15 minutes!

## Prerequisites Check

Do you have these installed?
- [ ] Git
- [ ] Ruby (3.0+)
- [ ] Text editor (VS Code, Sublime, etc.)

Not sure? Run these commands:
```bash
git --version
ruby --version
```

## Step 1: Clone & Setup (3 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
bundle install
```

**Troubleshooting**:
- "bundle: command not found" → Run: `gem install bundler`
- Permission denied → Try: `sudo gem install bundler`

## Step 2: Customize Content (5 minutes)

### Open `_config.yml` and update:

```yaml
# Change these 4 things minimum:
title: Your Name - Developer Portfolio
email: your.email@example.com

author:
  name: Your Full Name
  title: Your Job Title

social:
  github: yourgithubusername
  linkedin: yourlinkedinprofile
```

Save the file!

## Step 3: Test Locally (2 minutes)

```bash
bundle exec jekyll serve
```

Open browser to: **http://localhost:4000**

You should see your portfolio! 🎉

**Troubleshooting**:
- Port 4000 in use → Try: `bundle exec jekyll serve --port 4001`
- Errors about dependencies → Run: `bundle update`

## Step 4: Add Your Content (10 minutes)

### Priority items:

1. **Update About Section** (`index.html` lines 82-137)
   - Change your bio
   - Update education/experience

2. **Add Projects** (`index.html` lines 338-487)
   - Change project titles
   - Update descriptions
   - Add your GitHub/demo links

3. **Update Skills** (`index.html` lines 141-334)
   - Adjust percentages
   - Add/remove skills

## Step 5: Replace Images (5 minutes)

**Quick option**: Use placeholders first!

In `index.html`, replace image paths:

```html
<!-- Instead of local file -->
<img src="{{ '/assets/images/profile.jpg' | relative_url }}">

<!-- Use placeholder -->
<img src="https://i.pravatar.cc/450">
```

**Proper option**: Add your images to `/assets/images/`
- profile.jpg
- about.jpg
- project-1.jpg through project-4.jpg

## Step 6: Deploy to GitHub (5 minutes)

### Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create new repository: `yourusername.github.io`
   - ⚠️ Use your actual GitHub username!
   - Make it public
   - Don't initialize with README

### Push Your Code

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment"
3. Source: **GitHub Actions**
4. Save

### Wait ~2 minutes, then visit:
**https://yourusername.github.io**

Your portfolio is live! 🚀

## Troubleshooting Deployment

### Build failing?

Check the Actions tab for errors:
1. Go to your repo → **Actions** tab
2. Click the failed workflow
3. Read the error message

Common fixes:
- Update Ruby version in `.github/workflows/deploy.yml`
- Check `_config.yml` syntax
- Ensure all files are committed

### 404 Error?

1. Check repository name is `yourusername.github.io`
2. Verify GitHub Pages is enabled (Settings → Pages)
3. Wait a few minutes for build to complete
4. Check Actions tab for successful deployment

### Styles not loading?

Update `_config.yml`:
```yaml
url: "https://yourusername.github.io"
baseurl: "" # Empty for username.github.io
```

## Next Steps

### Essential Customizations:
1. ✅ Add real images
2. ✅ Update all projects
3. ✅ Add resume PDF
4. ✅ Test contact form
5. ✅ Update README with your info

### Optional Enhancements:
- [ ] Change color scheme
- [ ] Add more projects
- [ ] Integrate contact form backend
- [ ] Add blog section
- [ ] Set up custom domain
- [ ] Add Google Analytics

## Detailed Guides

- **Full customization**: See `CUSTOMIZATION.md`
- **Complete documentation**: See `README.md`
- **Image guidelines**: See `assets/images/README.md`

## Common Commands

```bash
# Local development
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload

# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Update dependencies
bundle update

# Check for issues
bundle exec jekyll doctor
```

## Getting Help

### Issues?
1. Check the [Troubleshooting section](README.md#troubleshooting)
2. Review Jekyll docs: https://jekyllrb.com/docs/
3. Create an issue on GitHub

### Questions?
- Jekyll Documentation: https://jekyllrb.com/
- GitHub Pages: https://pages.github.com/
- Font Awesome Icons: https://fontawesome.com/

## Checklist Before Going Live

- [ ] Personal info updated
- [ ] All images replaced/optimized
- [ ] Projects showcase your best work
- [ ] Skills accurately reflect your abilities
- [ ] All links tested (GitHub, LinkedIn, etc.)
- [ ] Resume PDF uploaded
- [ ] Contact form works (or backend integrated)
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Site loads fast
- [ ] Proofread all text
- [ ] Favicon updated

## Pro Tips

1. **Commit often**: Save your progress frequently
   ```bash
   git add .
   git commit -m "Updated about section"
   git push
   ```

2. **Test mobile first**: Most visitors will be on mobile
   - Use browser DevTools (F12)
   - Toggle device toolbar
   - Test on actual devices

3. **Keep it simple**: Don't over-customize initially
   - Get it live first
   - Improve incrementally
   - Focus on content over design

4. **Iterate**: Your portfolio should evolve
   - Update projects regularly
   - Add new skills
   - Refresh content

## Support

Made with ❤️ by developers, for developers.

Questions? Check the documentation or open an issue!

---

**Ready to impress?** Share your portfolio! 🎉

- Twitter: "Check out my new portfolio! 🚀"
- LinkedIn: Add to your profile
- Resume: Include the link
- Email signature: Showcase your work
