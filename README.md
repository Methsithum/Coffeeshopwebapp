# ☕ Grand Café - Premium Coffee Shop Website

An elegant, responsive coffee shop website built with React and Tailwind CSS, featuring sophisticated design, full navigation, and integrated WhatsApp ordering.

![Coffee Shop Design](https://img.shields.io/badge/Design-Elegant_Stone/Amber-amber?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎨 **Design & User Experience**
- **Elegant Color Scheme**: Stone and amber palette with gradient accents
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: CSS transitions and hover effects
- **Parallax Scrolling**: Dynamic background effects on the home page

### 📱 **Navigation & Pages**
- **Multi-Page Routing**: React Router for seamless navigation
- **Sticky Navigation Bar**: Glassmorphism navbar with scroll effects
- **5 Complete Pages**:
  - 🏠 **Home Page**: Hero banner with slideshow and statistics
  - ℹ️ **About Us**: Coffee shop story, timeline, and values
  - 📋 **Menu**: Interactive menu with filtering (8+ items)
  - 🖼️ **Gallery**: Image gallery with lightbox view (6-8 images)
  - 📞 **Contact**: Contact form, map, and WhatsApp ordering

### ☕ **Coffee Shop Features**
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled messages
- **Interactive Menu**: Filter by coffee/pastries and categories
- **Services Showcase**: Dine-in, takeaway, WiFi, work space, live music
- **Business Information**: Hours, location, contact details
- **Gallery Section**: Visual showcase of coffee shop ambiance

### 🛠️ **Technical Features**
- **React Components**: Modular, reusable component architecture
- **React Router**: Client-side routing with active link styling
- **React Icons**: Beautiful icon set for visual elements
- **Tailwind CSS**: Utility-first styling with custom configurations
- **State Management**: React hooks for form handling and UI states

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Methsithum/Coffeeshopwebapp.git
cd grand-cafe
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install required packages**
```bash
npm install react-router-dom react-icons
# or
yarn add react-router-dom react-icons
```

### Project Structure
```
grand-cafe/
├── src/
│   ├── components/
│   │   ├── ElegantHomeBanner.jsx    # Home page hero banner
│   │   ├── ServicesSection.jsx      # Services showcase
│   │   ├── AboutUsSection.jsx       # About page content
│   │   └── Navbar.jsx              # Main navigation
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── About.jsx               # About page
│   │   ├── Menu.jsx                # Menu page
│   │   ├── Gallery.jsx             # Gallery page
│   │   └── Contact.jsx             # Contact page
│   ├── App.jsx                     # Router configuration
│   └── index.js                    # Application entry point
├── public/
│   └── assets/                     # Images and static files
├── tailwind.config.js              # Tailwind configuration
└── package.json                    # Dependencies and scripts
```

### Running the Project

#### Development Mode
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) to view in browser.

#### Build for Production
```bash
npm run build
# or
yarn build
```

#### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Configuration

#### 1. Update Contact Information
Edit `src/pages/Contact.jsx` to update:
- Coffee shop address
- Phone number
- Email address
- Opening hours
- WhatsApp number

#### 2. Add Your Images
Place your images in `public/assets/`:
- `coffee1.jpg`, `coffee2.jpg`, `coffee3.jpg` for home banner
- Menu item images
- Gallery photos

#### 3. Customize Menu Items
Edit `src/pages/Menu.jsx` to update:
- Item names and descriptions
- Prices (in Sri Lankan Rupees)
- Categories and filters

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🎯 Key Components

### Navbar (`Navbar.jsx`)
- Fixed position with scroll effects
- Responsive mobile menu
- WhatsApp ordering modal
- Active link highlighting

### Home Banner (`ElegantHomeBanner.jsx`)
- Image slideshow with autoplay
- Mouse parallax effects
- Animated statistics
- Call-to-action buttons

### Menu Page (`Menu.jsx`)
- Filterable grid layout
- Category tabs
- Item cards with images and prices
- Add to cart functionality

### Contact Page (`Contact.jsx`)
- Contact information cards
- Google Maps integration
- Contact form
- WhatsApp ordering form

## 🎨 Styling

This project uses **Tailwind CSS** with custom configurations:

### Color Palette
```javascript
// Primary Colors
stone-900, stone-800, stone-700  // Backgrounds
amber-100, amber-200, amber-300  // Text and accents
amber-600, amber-700, amber-800  // Buttons and highlights
emerald-600, emerald-700         // WhatsApp elements
```

### Custom Animations
- Floating coffee elements
- Gradient shimmer effects
- Hover scale transitions
- Fade-in animations

## 🔧 Customization

### Update Business Information
1. **Coffee Shop Name**: Edit in `Navbar.jsx` and page headers
2. **Contact Details**: Update in `Contact.jsx`
3. **Menu Items**: Modify in `Menu.jsx`
4. **Gallery Images**: Replace in `Gallery.jsx`

### Change Color Scheme
Edit `tailwind.config.js` to update the color palette:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6F4E37',
        'cream': '#F5E9D9',
        // Add your custom colors
      }
    }
  }
}
```

### Add New Pages
1. Create new page in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation item in `Navbar.jsx`

## 📞 Support & Contact

For questions or support:
- **Email**: your.email@example.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/grand-cafe/issues)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Icons** for beautiful icons
- **Tailwind CSS** for styling utilities
- **React Router** for navigation
- Design inspiration from premium coffee shops

---

**Enjoy your coffee shop website!** ☕✨

Built with ❤️ for coffee lovers everywhere.