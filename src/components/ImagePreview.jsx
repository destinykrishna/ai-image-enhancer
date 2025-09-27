import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  // Function to download the enhanced image
  const downloadImage = async () => {
    try {
      // Handle different possible URL formats
      const imageUrl = props.enhanced;
      
      if (!imageUrl) {
        alert('No enhanced image available to download.');
        return;
      }

      const response = await fetch(imageUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Get file extension from URL or default to jpg
      const urlParts = imageUrl.split('.');
      const extension = urlParts.length > 1 ? urlParts[urlParts.length - 1].split('?')[0] : 'jpg';
      
      link.download = `enhanced-image-${Date.now()}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  // Check if we have an enhanced image (handles both string URLs and object responses)
  const hasEnhancedImage = props.enhanced && props.enhanced.length > 0;

  return (
    <div className='flex justify-center w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl'>
        {/* Original Image */}
        <div className='bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1'>
        <div className='bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4'>
          <h2 className='text-xl font-bold text-white flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Original Image
          </h2>
        </div>
        {props.uploaded ? (
          <div className="relative group">
            <img src={props.uploaded} alt="Original" className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105' />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-80 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400'>
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-medium">No Image Selected</p>
            <p className="text-sm">Upload an image to get started</p>
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4'>
          <h2 className='text-xl font-bold text-white flex items-center'>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Enhanced Image
            {hasEnhancedImage && (
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Ready</span>
            )}
          </h2>
        </div>
        
        {props.loading ? (
          <div className='flex items-center justify-center h-80 bg-gradient-to-br from-blue-50 to-purple-50'>
            <Loading/>
          </div>
        ) : hasEnhancedImage ? (
          <div className='relative group'>
            <img src={props.enhanced} alt="Enhanced" className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105' />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            
            {/* Download button overlay in top-right corner */}
            <button
              onClick={downloadImage}
              className='absolute top-4 right-4 bg-green-600/90 hover:bg-green-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm'
              title='Quick Download'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </button>
            
            {/* Download button below image */}
            <div className='p-6 bg-gradient-to-r from-green-50 to-emerald-50'>
              <button
                onClick={downloadImage}
                className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                Download Enhanced Image
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-80 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-400'>
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg font-medium">Enhancement Ready</p>
            <p className="text-sm">Upload an image to see the magic happen</p>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default ImagePreview