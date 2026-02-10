# Online Store - Kaspi Products

An Angular application that displays a catalog of real products from kaspi.kz with image galleries, ratings, and share functionality.

## Features

- ✅ **Product Catalog**: Displays 10 real products from Kaspi.kz
- ✅ **Image Gallery**: Each product has 3+ images with thumbnail navigation and arrow controls
- ✅ **Product Details**: Shows name, description, price (in KZT), and star ratings
- ✅ **Share Functionality**: Share products via WhatsApp or Telegram
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Modern Angular**: Built with Angular 19+ standalone components

## Technologies Used

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **CSS Grid & Flexbox** - Responsive layouts
- **Standalone Components** - Modern Angular architecture

## Project Structure

```
online-store/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/
│   │   │   │   ├── product-list.component.ts
│   │   │   │   ├── product-list.component.html
│   │   │   │   ├── product-list.component.css
│   │   │   │   └── product-list.component.spec.ts
│   │   │   └── product-card/
│   │   │       ├── product-card.component.ts
│   │   │       ├── product-card.component.html
│   │   │       ├── product-card.component.css
│   │   │       └── product-card.component.spec.ts
│   │   ├── models/
│   │   │   └── product.model.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.spec.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── .gitignore
└── README.md
```

## Installation

1. **Prerequisites**:
   - Node.js (v18 or higher)
   - npm (comes with Node.js)

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm start
```

Or:

```bash
ng serve
```

The application will open at `http://localhost:4200/`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

```bash
npm test
```

Or:

```bash
ng test
```

## Features Details

### Product Model

Each product includes:
- `id`: Unique identifier
- `name`: Product name
- `description`: Short description
- `price`: Price in KZT (Kazakhstani Tenge)
- `rating`: Rating from 1-5 (decimal values supported)
- `image`: Main product image URL
- `images`: Array of image URLs for gallery (minimum 3)
- `link`: Direct URL to Kaspi.kz product page

### Image Gallery

- **Thumbnail Navigation**: Click thumbnails to switch images
- **Arrow Controls**: Previous/Next buttons for image navigation
- **Responsive**: Adapts to different screen sizes
- **Visual Feedback**: Active thumbnail highlighted

### Share Functionality

- **WhatsApp**: Share product with pre-filled message
- **Telegram**: Share product link with product name
- **Dropdown Menu**: Clean UI for share options
- **URL Encoding**: Properly encodes URLs for sharing

### Responsive Design

- **Desktop**: Multi-column grid layout
- **Tablet**: 2-column layout
- **Mobile**: Single column with optimized spacing

## Code Quality

- ✅ TypeScript with strict mode
- ✅ Strong typing (no `any` types)
- ✅ Component-based architecture
- ✅ Follows Angular Style Guide
- ✅ Scoped component styles
- ✅ Proper use of Angular directives (`*ngFor`, `*ngIf`)
- ✅ Unit tests included

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Products Included

1. Apple iPhone 15 Pro 128GB
2. Sony PlayStation 5 Slim
3. Dyson Airwrap Multi-styler
4. Samsung Galaxy S24 Ultra
5. Apple MacBook Air 13 M2
6. Marshall Emberton II
7. Xiaomi Mi Band 8
8. AirPods Pro 2 with USB-C
9. Nintendo Switch OLED
10. Logitech G Pro X Superlight

All products link to their actual pages on kaspi.kz.

## License

This project is for educational purposes.

## Author

Created as part of Angular Lab Assignment (Task 2)
