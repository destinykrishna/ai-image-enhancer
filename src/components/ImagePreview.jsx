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
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
          Original Image
        </h2>
        {props.uploaded ? (
          <img src={props.uploaded} alt="Original" className='w-full h-full object-cover' />
        ) : (
          <div className='flex items-center justify-center h-80 bg-gray-200'>No Image Selected</div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
          Enhanced Image
        </h2>
        
        {props.loading ? (
          <div className='flex items-center justify-center h-80'>
            <Loading/>
          </div>
        ) : hasEnhancedImage ? (
          <div className='relative'>
            <img src={props.enhanced} alt="Enhanced" className='w-full h-full object-cover' />
            {/* Download button overlay in top-right corner */}
            <button
              onClick={downloadImage}
              className='absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110'
              title='Download Enhanced Image'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </button>
            {/* Download button below image as well */}
            <div className='p-4 text-center bg-gray-50'>
              <button
                onClick={downloadImage}
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                Download Enhanced Image
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center h-80 bg-gray-200'>
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview