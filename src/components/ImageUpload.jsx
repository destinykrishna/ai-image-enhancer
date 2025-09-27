const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gradient-to-r from-blue-400 to-purple-400 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group relative overflow-hidden"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                    accept="image/*"
                />
                
                {/* Upload Icon */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                            Drop your image here
                        </h3>
                        <p className="text-gray-500 group-hover:text-gray-600 transition-colors">
                            or <span className="text-blue-600 font-semibold">click to browse</span>
                        </p>
                        <div className="mt-3 flex justify-center space-x-4 text-xs text-gray-400">
                            <span className="bg-gray-100 px-2 py-1 rounded-full">JPG</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-full">PNG</span>
                            <span className="bg-gray-100 px-2 py-1 rounded-full">WEBP</span>
                        </div>
                    </div>
                </div>
            </label>
            </div>
        </div>
    );
};

export default ImageUpload;
