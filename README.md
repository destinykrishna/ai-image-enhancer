# 🚀 AI Image Enhancer

A modern React-based web application that uses AI to enhance image quality with an intuitive drag-and-drop interface.

## ✨ Features

- 🖼️ **Drag & Drop Upload**: Easy image uploading interface
- 🤖 **AI Enhancement**: Powered by advanced AI image processing
- 💾 **Download Enhanced Images**: One-click download of processed images
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- ⚡ **Real-time Processing**: Live updates during image enhancement
- 🛡️ **Error Handling**: Robust error handling with user feedback
- 🎨 **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Image Processing**: AI API Integration
- **Icons**: Heroicons

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- AI Image Enhancement API key

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/destinykrishna/ai-image-enhancer.git
cd ai-image-enhancer
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your API credentials
API_KEY=your_api_key_here
BASE_URL=your_api_base_url_here
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
ai-image-enhancer/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Main component
│   │   ├── ImageUpload.jsx       # File upload component
│   │   ├── ImagePreview.jsx      # Image display & download
│   │   └── Loading.jsx           # Loading spinner
│   ├── utils/
│   │   └── enhancedImageApi.js   # API integration
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/
├── .env.example                  # Environment variables template
└── README.md
```

## 🎯 How It Works

1. **Upload**: Drag and drop your image or click to select
2. **Process**: The app sends your image to the AI enhancement API
3. **Preview**: View both original and enhanced images side by side
4. **Download**: Click the download button to save the enhanced image

## 🔧 Configuration

### Environment Variables
Create a `.env` file with these variables:

```env
API_KEY=your_ai_api_key
BASE_URL=https://api.your-ai-service.com
```

### API Integration
The app uses a polling mechanism to check enhancement status:
- Maximum retries: 20
- Polling interval: 2 seconds
- Automatic error handling and user feedback

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts
4. Add environment variables in Vercel dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Destiny Krishna**
- GitHub: [@destinykrishna](https://github.com/destinykrishna)

## 🙏 Acknowledgments

- Thanks to the AI image processing API providers
- Built with ❤️ using React and Vite
- Styled with Tailwind CSS

## 📞 Support

If you like this project, please ⭐ star it on GitHub!

For questions or support, please open an issue on GitHub.

---

Made with ❤️ by [Destiny Krishna](https://github.com/destinykrishna)
