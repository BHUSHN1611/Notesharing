import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../config'

const Headline = () => {
  const [latestUpload,setLatestuploads] = useState([])
  const getlatestUploads = async()=>{
    try {
      const response = await axios.get(`${API_URL}/file/notes/latest`);
      setLatestuploads(response.data)
     
      
    } catch (error) {
      console.log("Error occur while getlatesUploads")
      
    }
  }

  useEffect(()=>{
       getlatestUploads()
      },[])
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 p-2">
      <div className="inline-block animate-marquee">
        {Array.isArray(latestUpload.titles) && latestUpload.titles.map((item, index) => (
          <span key={index} className="inline-block mx-4 px-3 py-1 bg-linear-to-br from-[#6366f1] via-[#4f46e5] to-[#4338ca] text-white rounded shadow">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

}

export default Headline;