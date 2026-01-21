import React, { useState } from 'react'

const Resource = () => {
    const [isClick,setIsclick] = useState(false);
    const getYoutubeUrl = () => {

    }
  return (
    <div className="w-full h-full p-2 ">
        <div className='h-150 flex justify-center items-center'>
            <button 
            onClick={()=>setIsclick(true)}
            className='bg-linear-to-r from-blue-700 to-blue-500 py-3 px-6 rounded-2xl text-white font-bold mb-4 h-15 w-50 text-2xl'>Add res +</button>
        </div>

        {isClick && (
            <div>
                <div className=''>
                    <form onSubmit={getYoutubeUrl}>
                        <div className="w-full h-45 max-w-xs p-4 bg-white rounded-lg  flex flex-col justify-between">
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