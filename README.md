# 🚀 AI Image Enhancer

A modern, AI-powered web application that transforms your images with cutting-edge enhancement technology. Built with React, Vite, and TailwindCSS for a seamless user experience.

![AI Image Enhancer](https://img.shields.io/badge/AI-Powered-blue) ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?logo=tailwind-css)

## ✨ Features

- 🤖 **AI-Powered Enhancement** - Advanced AI algorithms for superior image quality
- ⚡ **Fast Processing** - Quick image enhancement with real-time feedback
- 🎨 **Modern UI** - Beautiful glassmorphism design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 💾 **Easy Download** - One-click download for enhanced images
- 🔒 **Secure** - Environment variables for API key protection
- 🎯 **User-Friendly** - Drag & drop interface with clear visual feedback

## 🖼️ Supported Formats

- **JPEG** (.jpg, .jpeg)
- **PNG** (.png)
- **WebP** (.webp)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-image-enhancer.git
   cd ai-image-enhancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your API credentials:
   ```env
   VITE_API_KEY=your_actual_api_key_here
   VITE_BASE_URL=https://your-api-endpoint.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Built With

### Frontend Technologies
- **[React 19.1.1](https://reactjs.org/)** - Modern UI library
- **[Vite 7.1.2](https://vitejs.dev/)** - Fast build tool and dev server
- **[TailwindCSS 4.1.13](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Dependencies
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Environment variable management

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - Hot module replacement (HMR)

## 📁 Project Structure

```
ai-image-enhancer/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Home.jsx      # Main container component
│   │   ├── ImageUpload.jsx    # File upload component
│   │   ├── ImagePreview.jsx   # Image display component
│   │   └── Loading.jsx   # Loading animation component
│   ├── utils/
│   │   └── enhanceImageApi.js # API integration
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles + custom animations
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md           # Project documentation
```

## 🎨 Design Features

### Visual Design
- **Glassmorphism Effects** - Modern frosted glass aesthetic
- **Gradient Backgrounds** - Beautiful color transitions
- **Smooth Animations** - Hover effects and micro-interactions
- **Custom Loading Animation** - Dual spinning circles with progress dots

### User Experience
- **Drag & Drop Interface** - Intuitive file upload
- **Real-time Feedback** - Loading states and progress indicators
- **Side-by-side Comparison** - Original vs Enhanced image preview
- **Quick Download** - Multiple download options for convenience

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_KEY` | Your AI service API key | ✅ |
| `VITE_BASE_URL` | Base URL for the enhancement API | ✅ |

### API Integration

The application integrates with image enhancement APIs through the `enhanceImageApi.js` utility:

- **Upload Process**: Images are sent via multipart/form-data
- **Processing**: Polling mechanism checks enhancement status
- **Retry Logic**: Automatic retries with configurable limits
- **Error Handling**: Comprehensive error messages and fallbacks

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **GitHub Pages** - Free hosting for public repos
- **AWS S3** - Scalable cloud storage

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**@destinyKrishna**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Thanks to the AI/ML community for advancing image enhancement technology
- React team for the excellent framework
- Vite team for the blazing-fast build tool
- TailwindCSS team for the utility-first CSS approach

---

⭐ **Star this repository if you found it helpful!**
