# 🛍️ TechStore KZ — Lab 5 Online Store

Complete Angular 17 online store with category browsing and interactive product cards.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server  
ng serve

# 3. Open browser
http://localhost:4200
```

You'll see the TechStore KZ app immediately — NO default Angular welcome page!

## ✨ Features

- **4 Categories**: Smartphones, Laptops, Headphones, Tablets
- **20 Products**: 5 products per category, all linking to real kaspi.kz pages
- **Like Button**: Click the heart to increment likes with animation
- **Delete Button**: Remove products with confirmation dialog
- **Share**: Share via WhatsApp or Telegram  
- **Image Gallery**: Click dots to switch between product images
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Polished dark UI with Sora + DM Sans fonts

## 🏗️ Component Architecture

```
AppComponent (root)
  ├── Category navigation
  ├── Welcome screen
  └── ProductListComponent [@Input products]
        └── ProductItemComponent *ngFor [@Input product, @Output deleteProduct]
```

**Data Flow:**
- ⬇️ `@Input()` — data flows parent → child
- ⬆️ `@Output()` — events flow child → parent

## 📁 Project Structure

```
src/app/
├── models/
│   ├── category.model.ts
│   └── product.model.ts
├── services/
│   └── product.service.ts
├── components/
│   ├── product-list/
│   │   ├── product-list.component.ts
│   │   ├── product-list.component.html
│   │   └── product-list.component.css
│   └── product-item/
│       ├── product-item.component.ts
│       ├── product-item.component.html
│       └── product-item.component.css
├── app.component.ts
├── app.component.html
└── app.component.css
```

## 🎯 Lab 5 Requirements Met

✅ 4 categories × 5 products = 20 products total  
✅ All products link to real kaspi.kz items  
✅ `likes: number` and `categoryId: number` on Product interface  
✅ ProductService injectable — no hardcoded data in components  
✅ Like button with heart animation + live counter  
✅ Delete button with confirmation dialog → emits via `@Output()`  
✅ Share button with WhatsApp + Telegram dropdown  
✅ Image gallery with dot navigation per card  
✅ Category switching with active highlight  
✅ Empty state message when all products deleted  
✅ Strict TypeScript (no `any`), `OnChanges` lifecycle, `trackBy`  
✅ Responsive CSS Grid layout  

## 🛠️ Technologies

- Angular 17 (Standalone Components)
- TypeScript (strict mode)
- CSS Grid & Flexbox
- Google Fonts (Sora + DM Sans)

## 📝 Notes

- No `node_modules/` in the ZIP — run `npm install` first
- Uses Angular 17's standalone components (no NgModule)
- All 20 products have real kaspi.kz URLs
- Dark theme with custom CSS variables

---

**Made for Web Development Lab 5** 🎓
