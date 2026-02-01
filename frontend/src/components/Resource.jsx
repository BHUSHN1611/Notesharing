import React, { useState } from 'react'

const Resource = () => {
    const [isClick,setIsclick] = useState(false);
    const getYoutubeUrl = () => {
        const link = document.getElementById('noteReference').value.trim();

  // Remove spaces from pasted link
   const cleanedLink = link.replace(/\s+/g, "");
  // Reset preview
  // preview.innerHTML = "";
  try {
    const url = new URL(cleanedLink);
    let videoId = null;

    // Case 1: https://youtu.be/VIDEO_ID
    if (url.hostname === "youtu.be") {
      videoId = url.pathname.slice(1);
    }

    // Case 2: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.hostname.includes("youtube.com")) {
      videoId = url.searchParams.get("v");
    }

    if (!videoId) throw new Error("Invalid YouTube link");

    // Fallback thumbnail logic
  
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    return thumbnailUrl;
  } catch (err) {
    return "https://placehold.co/600x400/EEE/31343C?font=poppins&text=Thumbnail"

    }}
  return (
    <div className="w-full h-full p-2 static">
        <div className='h-150 flex justify-center items-center'>
            <button 
            onClick={()=>setIsclick(true)}
            className='bg-linear-to-r from-blue-700 to-blue-500 py-3 px-6 rounded-2xl text-white font-bold mb-4 h-15 w-50 text-2xl'>Add res +</button>
        </div>

        {isClick && (
            <div>
                <div className=''>
                    <form onSubmit={getYoutubeUrl} className='absolute bottom-80 left-180 w-100'>
                        <div className="w-full h-45 max-w-xs p-4 bg-white rounded-lg  flex flex-col justify-between border-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                            >Title</label>
                        <input
                            className="text-md custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            placeholder="Enter text here"
                            type="text"
                            />
                            <label className="block text-gray-700 text-sm font-bold mb-2 mt-3"
                            >Link</label>
                            <input
                            className="text-md custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            placeholder="Enter text here"
                            type="text"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )}

    </div>
  )
}

export default Resource