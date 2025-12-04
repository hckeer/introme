# Image Assets Directory

This directory should contain all your portfolio images.

## Required Images

### 1. Profile Images

**profile.jpg** (450x450px)
- Your main profile photo for the hero section
- Square format, professional headshot
- High quality, good lighting
- Recommended format: JPG
- Max size: 200KB (after optimization)

**about.jpg** (600x800px)
- Photo for the about section
- Portrait orientation
- Can be more casual or creative
- Shows your personality
- Recommended format: JPG
- Max size: 250KB

### 2. Project Screenshots

**project-1.jpg** through **project-4.jpg** (600x400px)
- Screenshots or mockups of your projects
- Landscape orientation (3:2 ratio)
- Show key features or UI
- High quality, clear text/details
- Recommended format: JPG or PNG
- Max size: 200KB each

### 3. Favicon

**favicon.png** (32x32px or 64x64px)
- Small icon for browser tabs
- Simple, recognizable design
- Usually your logo or initials
- Recommended format: PNG
- Should work at small sizes

## Image Optimization Tips

### Tools for Compression
1. [TinyPNG](https://tinypng.com/) - Easy online compression
2. [Squoosh](https://squoosh.app/) - Google's image optimizer
3. [ImageOptim](https://imageoptim.com/) - Mac app
4. [GIMP](https://www.gimp.org/) - Free Photoshop alternative

### Best Practices
- Always compress images before uploading
- Target file size < 200KB per image
- Use JPG for photos (better compression)
- Use PNG for graphics with transparency
- Consider WebP format for modern browsers
- Maintain aspect ratios (no stretching)
- Use descriptive filenames (lowercase, hyphens)

### Quick Optimization Command (if you have ImageMagick)
```bash
# Resize and optimize
convert input.jpg -resize 600x400^ -quality 85 output.jpg

# For profile image
convert input.jpg -resize 450x450^ -quality 85 profile.jpg
```

## Placeholder Images

If you don't have images ready yet, you can use placeholder services:

1. **Unsplash** (Real photos): https://unsplash.com/
2. **Pexels** (Free stock): https://www.pexels.com/
3. **UI Faces** (Avatars): https://uifaces.co/
4. **Lorem Picsum** (Random): https://picsum.photos/

Example placeholder URLs:
- Profile: `https://i.pravatar.cc/450`
- Projects: `https://picsum.photos/600/400?random=1`

## Current Image Requirements Checklist

- [ ] profile.jpg (450x450px)
- [ ] about.jpg (600x800px)
- [ ] project-1.jpg (600x400px)
- [ ] project-2.jpg (600x400px)
- [ ] project-3.jpg (600x400px)
- [ ] project-4.jpg (600x400px)
- [ ] favicon.png (32x32px or 64x64px)

## Adding More Images

If you add more projects or sections:

1. Place images in this directory
2. Use lowercase names with hyphens
3. Update references in `index.html`
4. Keep consistent dimensions within categories
5. Always optimize before committing

## Copyright Notice

Ensure you have the rights to use all images:
- Use your own photos ✅
- Use free stock photos with proper license ✅
- Use purchased stock photos ✅
- Never use copyrighted images without permission ❌

---

**Need image editing help?**
- [Canva](https://www.canva.com/) - Easy graphic design
- [Photopea](https://www.photopea.com/) - Free online Photoshop
- [Remove.bg](https://www.remove.bg/) - Background removal
