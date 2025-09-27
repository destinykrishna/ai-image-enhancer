import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-12 relative z-10 animate-fade-in">
                <div className="flex justify-center items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        AI Image Enhancer
                    </h1>
                </div>
                <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    Transform your photos with cutting-edge AI technology. 
                    <span className="text-blue-600 font-semibold"> Upload, enhance, and download</span> in seconds!
                </p>
                <div className="flex justify-center items-center mt-4 space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span>AI-Powered</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span>Fast Processing</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                        <span>High Quality</span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full">
                <Home />
            </div>

            <div className="text-sm text-gray-500 mt-8 relative z-10 flex items-center space-x-2">
                <span>Crafted with</span>
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>by @destinyKrishna</span>
            </div>
        </div>
    );
};

export default App;
