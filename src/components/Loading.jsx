import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full p-8">
            {/* Main Loading Spinner */}
            <div className="relative mb-4">
                <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
                <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600 absolute top-2 left-2" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Enhancing Your Image
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    AI is working its magic...
                </p>
                
                {/* Progress Dots */}
                <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
