# 📝 Background Image HTML Code Reference

## How the Image Sections Are Structured

Each page now has the same hero section structure with image support. Here's what the code looks like:

---

## 📋 HTML Structure Explanation

### The Three Layers

Each hero section has **3 layers** (from back to front):

```
Layer 1 (Back):     Background Image File
                    └─ Your image (hero-home.jpg, etc.)

Layer 2 (Middle):   Semi-transparent Overlay
                    └─ Rose/Pink gradient for text readability

Layer 3 (Front):    Text Content
                    └─ Headline and description
```

---

## 🔍 Code Breakdown

### Complete Hero Section Code

```html
<!-- Hero Section with Background Image -->
<section class="hero-bg-home relative text-white py-20 md:py-32 overflow-hidden">
    
    <!-- Layer 1: Background Image Placeholder -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
         style="background-image: url('assets/images/hero-home.jpg');">
    </div>
    
    <!-- Layer 2: Overlay for Text Readability -->
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    
    <!-- Layer 3: Text Content (Stays on Top) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
            Empowering Women, Transforming Communities
        </h2>
        <p class="text-lg md:text-xl mb-8">
            Your description here...
        </p>
        <!-- Buttons and CTAs -->
    </div>
</section>
```

---

## 📍 Each Page's Hero Section

### 1️⃣ Homepage - index.html
```html
<section class="hero-bg-home ...">
    <div style="background-image: url('assets/images/hero-home.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    <div class="max-w-7xl ... relative z-10">
        <!-- Content -->
    </div>
</section>
```
**Image File:** `assets/images/hero-home.jpg`

---

### 2️⃣ About Us - about.html
```html
<section class="hero-bg-about ...">
    <div style="background-image: url('assets/images/hero-about.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    <div class="max-w-7xl ... relative z-10">
        <!-- Content -->
    </div>
</section>
```
**Image File:** `assets/images/hero-about.jpg`

---

### 3️⃣ Our Impact - impact.html
```html
<section class="hero-bg-impact ...">
    <div style="background-image: url('assets/images/hero-impact.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    <div class="max-w-7xl ... relative z-10">
        <!-- Content -->
    </div>
</section>
```
**Image File:** `assets/images/hero-impact.jpg`

---

### 4️⃣ Donate - donate.html
```html
<section class="hero-bg-donate ...">
    <div style="background-image: url('assets/images/hero-donate.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    <div class="max-w-7xl ... relative z-10">
        <!-- Content -->
    </div>
</section>
```
**Image File:** `assets/images/hero-donate.jpg`

---

### 5️⃣ Contact - contact.html
```html
<section class="hero-bg-contact ...">
    <div style="background-image: url('assets/images/hero-contact.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/85 to-pink-600/85"></div>
    <div class="max-w-7xl ... relative z-10">
        <!-- Content -->
    </div>
</section>
```
**Image File:** `assets/images/hero-contact.jpg`

---

## 🎨 Key CSS Classes Explained

### `hero-bg-home` (and similar)
- Creates relative positioning context
- Sets base styling for hero sections
- Makes images responsive

### `absolute inset-0`
- Makes element cover entire section
- `inset-0` = top, right, bottom, left all 0
- Creates full-width background effect

### `bg-cover`
- Image covers entire container
- Maintains aspect ratio
- Crops if needed

### `bg-center`
- Centers the image
- Shows important parts in middle

### `bg-no-repeat`
- Image shows only once
- No tiling/repetition

### `from-rose-500/85 to-pink-600/85`
- Gradient overlay
- Rose (85% opacity) to Pink (85% opacity)
- Text readable on any background

### `relative z-10`
- Text stays on top
- z-10 ensures visibility

---

## 🔧 How to Modify

### Change Overlay Opacity

**Current (85% - Medium darkness):**
```html
from-rose-500/85 to-pink-600/85
```

**Lighter (70% - Shows more image):**
```html
from-rose-500/70 to-pink-600/70
```

**Darker (95% - More contrast):**
```html
from-rose-500/95 to-pink-600/95
```

---

### Change Overlay Color

**Rose/Pink (Current):**
```html
from-rose-500/85 to-pink-600/85
```

**Purple:**
```html
from-purple-500/85 to-purple-600/85
```

**Orange:**
```html
from-orange-500/85 to-orange-600/85
```

**Blue:**
```html
from-blue-500/85 to-blue-600/85
```

---

## 📸 How Images Display

### Desktop (1024px+)
- Full hero section visible
- Image displays at full dimensions
- 1920×600px recommended

### Tablet (768px - 1024px)
- Slightly reduced height
- Image crops from sides if needed
- Still maintains aspect ratio

### Mobile (320px - 768px)
- Reduced height for mobile
- `py-20 md:py-32` = 80px mobile, 128px desktop
- Image crops intelligently
- Text remains readable

---

## ✨ CSS Styling Location

The hero section styles are in:
```
assets/css/style.css
```

Look for the section:
```css
/* Hero Sections with Background Images */
.hero-bg-home,
.hero-bg-about,
.hero-bg-impact,
.hero-bg-donate,
.hero-bg-contact {
    position: relative;
    background: linear-gradient(to right, rgba(236, 72, 153, 0.85), rgba(244, 63, 94, 0.85));
    min-height: 300px;
}
```

---

## 🎯 File Path Reference

### Where Code Is
```
HTML Files:                  CSS File:
├─ index.html              assets/css/style.css
├─ about.html
├─ impact.html
├─ donate.html
└─ contact.html
```

### Where Images Go
```
assets/images/
├─ hero-home.jpg
├─ hero-about.jpg
├─ hero-impact.jpg
├─ hero-donate.jpg
└─ hero-contact.jpg
```

---

## 🚀 Quick Checklist

- [ ] Understand the 3-layer structure
- [ ] Know where each image file goes
- [ ] Understand CSS class names
- [ ] Ready to customize overlay colors
- [ ] Ready to customize overlay opacity
- [ ] Know how to modify for different devices

---

## 📝 Example: Adding Your First Image

### Step 1: Find Image
Go to Unsplash.com, search "women empowerment"

### Step 2: Resize
Use Canva.com: Set to 1920×600px

### Step 3: Compress
Use TinyPNG.com: Make under 500KB

### Step 4: Save
Save as `hero-home.jpg` in `assets/images/`

### Step 5: Test
Open `index.html` in browser → Image appears! ✨

---

## 🎨 Visual Layout Diagram

```
┌─────────────────────────────────────┐
│    Hero Section Container           │
│  (Overflow: hidden)                 │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ LAYER 1: IMAGE              │   │
│  │ background-image: url(...)  │   │
│  │                             │   │
│  │  ┌───────────────────────┐ │   │
│  │  │ LAYER 2: OVERLAY      │ │   │
│  │  │ from-rose-500/85      │ │   │
│  │  │ to-pink-600/85        │ │   │
│  │  │                       │ │   │
│  │  │ ┌─────────────────┐  │ │   │
│  │  │ │ LAYER 3: TEXT  │  │ │   │
│  │  │ │ relative z-10  │  │ │   │
│  │  │ │                │  │ │   │
│  │  │ │ "Empowering    │  │ │   │
│  │  │ │  Women..."     │  │ │   │
│  │  │ │                │  │ │   │
│  │  │ └─────────────────┘  │ │   │
│  │  │                       │ │   │
│  │  └───────────────────────┘ │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

---

## 💡 Pro Tips

1. **Best Image Aspect Ratio:** 16:9
2. **Recommended Size:** 1920×600px
3. **File Size:** Keep under 500KB
4. **Overlay Opacity:** 85% works well for most images
5. **Test on Mobile:** Always check how it looks on phones
6. **Use Authentic Images:** Show real women, real empowerment
7. **Center Important Content:** Put key visuals in center
8. **Compress Well:** Use TinyPNG to reduce file size

---

**Ready to add your images? You have everything you need!** 🌟
