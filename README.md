# AI Project Portfolio - Next.js

A beautiful, responsive portfolio website showcasing AI projects built with Next.js, React, and Framer Motion.

## 🚀 Features

- **Modern Design**: Gradient backgrounds with smooth animations
- **Responsive Layout**: Optimized for all devices
- **Interactive Cards**: Hover effects and click animations
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **Accessibility**: Keyboard navigation and screen reader support
- **Smooth Animations**: Powered by Framer Motion
- **SEO Friendly**: Meta tags and structured data

## 📁 Project Structure

```
ai-project-portfolio/
├── components/
│   ├── ProjectCard.js      # Individual project card component
│   └── LoadingSpinner.js   # Loading animation component
├── data/
│   └── projects.js         # Project data configuration
├── pages/
│   ├── _app.js            # Next.js app configuration
│   └── index.js           # Main homepage
├── styles/
│   ├── globals.css        # Global styles
│   ├── Home.module.css    # Homepage styles
│   ├── ProjectCard.module.css  # Project card styles
│   └── LoadingSpinner.module.css  # Loading spinner styles
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization

### Update Project Data

Edit the `data/projects.js` file to add your own projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description",
    thumbnail: "https://your-image-url.com/image.jpg",
    url: "https://github.com/yourusername/your-project",
    technologies: ["Technology1", "Technology2", "Technology3"],
    status: "Completed", // Completed, In Progress, Planned
    date: "2024-01"
  },
  // Add more projects...
];
```

### Customize Colors

Update the gradient colors in `styles/globals.css`:

```css
body {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Modify Layout

Adjust the grid layout in `styles/Home.module.css`:

```css
.projectsGrid {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  /* Change minmax value to adjust card size */
}
```

## 🎨 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Framer Motion** - Animation library
- **CSS Modules** - Scoped styling
- **Next.js Image** - Optimized images

## 📱 Responsive Design

- **Desktop**: 2-column grid layout
- **Tablet**: 1-2 column auto-adjusting layout
- **Mobile**: Single column layout

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-project-portfolio)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to GitHub Pages

Add to `next.config.js`:

```javascript
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

## 🌟 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Images load only when visible
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Optimization**: Meta tags and structured data
- **Accessibility**: WCAG compliant with keyboard navigation

## 🐛 Troubleshooting

### Images not loading
- Verify image URLs are accessible
- Check `next.config.js` for correct domain configuration
- Ensure CORS policy allows image loading

### Build errors
- Check all imports and component exports
- Verify CSS module naming conventions
- Ensure all dependencies are installed

### Performance issues
- Optimize image sizes and formats
- Use WebP format when possible
- Consider implementing a CDN for images

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Framer Motion** # ai-project-portfolio
