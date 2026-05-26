# 🖼️ Background Image Setup Guide

## Overview

Your website is now ready for premium background images on the hero sections. Each page has a dedicated image placeholder for you to customize.

---

## 📍 Where to Add Images

Add images to: `assets/images/`

**Required Image Files:**
```
assets/images/
├── hero-home.jpg      ← Homepage hero background
├── hero-about.jpg     ← About Us page hero background
├── hero-impact.jpg    ← Our Impact page hero background
├── hero-donate.jpg    ← Donation page hero background
└── hero-contact.jpg   ← Contact Us page hero background
```

---

## 🎨 Image Specifications

### Recommended Specs
- **Dimensions:** 1920px × 600px (or larger)
- **Aspect Ratio:** 16:9
- **File Format:** JPG or PNG
- **File Size:** 200-500KB (optimized)
- **Resolution:** High quality (72+ DPI)

### Content Guidelines
✅ **Do:**
- Use authentic, empowering imagery
- Show women from diverse backgrounds
- Include community, education, or empowerment themes
- Use complementary colors (rose, pink, warm tones)
- Show strength, resilience, hope, and dignity

❌ **Avoid:**
- Stereotypical or victimizing portrayals
- Low-quality or blurry images
- Images with conflicting colors
- Overly dark images (text might be hard to read)
- Copyright-protected images

---

## 🖼️ Suggested Images by Page

### 1. **hero-home.jpg** (Homepage)
- **Theme:** Women in empowerment or community gathering
- **Mood:** Inspiring, hopeful, inclusive
- **Suggestion:** Group of women smiling, classroom scene, or women in workplace

### 2. **hero-about.jpg** (About Us)
- **Theme:** Organization's team or community work
- **Mood:** Professional, dedicated, united
- **Suggestion:** Team photo, women in training, or community discussion

### 3. **hero-impact.jpg** (Our Impact)
- **Theme:** Success stories or transformation
- **Mood:** Celebratory, victorious, progressive
- **Suggestion:** Women with certificates, business women, or success celebration

### 4. **hero-donate.jpg** (Donation Page)
- **Theme:** Community support or giving
- **Mood:** Trust-building, supportive, action-oriented
- **Suggestion:** Women helping women, training session, or mentorship

### 5. **hero-contact.jpg** (Contact Us)
- **Theme:** Connection and communication
- **Mood:** Welcoming, accessible, open
- **Suggestion:** Women in discussion, hands together, or open doors

---

## 📸 How Images Display

### With Overlay Protection
All hero sections have a **semi-transparent gradient overlay** (rose/pink):
- **Overlay Opacity:** 85%
- **Effect:** Darkens background images for better text readability
- **Result:** White text remains readable on any background

```
┌─────────────────────────┐
│ Rose/Pink Overlay (85%) │
├─────────────────────────┤
│  Your Background Image  │
└─────────────────────────┘
```

### Responsive Behavior
- **Desktop:** Full width hero section with image
- **Tablet:** Image crops to fit, maintains aspect
- **Mobile:** Image optimized for smaller screens

---

## 🔧 How to Add Images

### Step 1: Prepare Your Image
1. Get your image (purchase from Unsplash, Pexels, Pixabay, etc.)
2. Resize to 1920×600px
3. Compress to 200-500KB using:
   - TinyPNG.com
   - ImageOptim (Mac)
   - FileZilla (Windows)

### Step 2: Add to Project
1. Save image to: `assets/images/`
2. Name it exactly as listed above (e.g., `hero-home.jpg`)
3. Make sure filename matches what's in HTML

### Step 3: Verify in HTML
The HTML file already has the correct path:
```html
<div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
     style="background-image: url('assets/images/hero-home.jpg');">
</div>
```

### Step 4: Test in Browser
1. Open the page in your browser
2. Refresh (Ctrl+F5 to clear cache)
3. Image should appear behind the text
4. Text should be readable with the overlay

---

## 🎨 Where to Find Free Images

### Free Image Websites
- **Unsplash** (unsplash.com) - High-quality, free
- **Pexels** (pexels.com) - Royalty-free photos
- **Pixabay** (pixabay.com) - Free stock images
- **Freepik** (freepik.com) - Design resources
- **Canva** (canva.com) - Design + stock images

### Search Keywords
- "women empowerment"
- "female education"
- "women's community"
- "women training"
- "women success"
- "women leadership"
- "diverse women"

---

## ✨ Customization Tips

### Adjust Overlay Darkness
If images are too bright/dark, edit in HTML:

**Current (85% opacity):**
```html
<div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
```

**Lighter (70% opacity):**
```html
<div class="absolute inset-0 bg-gradient-to-r from-rose-500/70 to-pink-600/70"></div>
```

**Darker (95% opacity):**
```html
<div class="absolute inset-0 bg-gradient-to-r from-rose-500/95 to-pink-600/95"></div>
```

### Change Overlay Colors
Edit the gradient colors:
```html
<!-- Current: Rose to Pink -->
from-rose-500/85 to-pink-600/85

<!-- Try: Purple overlay -->
from-purple-500/85 to-purple-600/85

<!-- Try: Orange overlay -->
from-orange-500/85 to-orange-600/85
```

---

## 📋 Checklist

- [ ] Created `assets/images/` folder
- [ ] Found or created 5 hero images
- [ ] Resized images to 1920×600px
- [ ] Compressed images to 200-500KB
- [ ] Named images correctly (hero-home.jpg, etc.)
- [ ] Placed images in `assets/images/` folder
- [ ] Tested each page in browser
- [ ] Verified text is readable
- [ ] Images display on mobile devices
- [ ] Colors complement the rose/pink theme

---

## 🐛 Troubleshooting

### Images Not Showing

**Problem:** Images don't appear on page

**Solutions:**
1. Check image filename (must match exactly)
2. Verify image is in `assets/images/` folder
3. Refresh browser cache (Ctrl+F5)
4. Check file extension (.jpg or .png)
5. Ensure image file exists and isn't corrupted

### Text Hard to Read

**Problem:** Text blends with background

**Solutions:**
1. Choose a darker image
2. Increase overlay opacity (change /85 to /95)
3. Use an image with distinct light/dark areas
4. Ensure good contrast between text and image

### Image Distorted

**Problem:** Image appears stretched or squished

**Solutions:**
1. Use 16:9 aspect ratio images (1920×600px recommended)
2. Avoid excessively wide or narrow images
3. Center important content in image
4. CSS is set to `bg-cover` - image will crop if needed

### Mobile Display Issues

**Problem:** Image doesn't show on mobile

**Solutions:**
1. Image file might be too large - compress more
2. Check mobile browser cache
3. Verify image paths are correct
4. Test in different mobile browsers

---

## 📞 Need Help?

- **Image Not Working?** Check the filename and folder path
- **Want Different Colors?** Edit the overlay opacity or colors in HTML
- **Image Quality?** Use Unsplash.com or Pexels.com for high-quality free images
- **File Size?** Use TinyPNG.com to compress

---

## 🎉 Done!

Your website is now ready for beautiful background images. Add the images and watch your site transform into a premium, professional-looking website!

**Remember:** The semi-transparent overlay keeps text readable while showcasing your images. Use authentic, empowering imagery that represents your mission.

---

**Happy designing! 🌟**
