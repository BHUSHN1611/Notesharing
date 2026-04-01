import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config.js';


const Alluser = () => {
  const [users,setUsers] = useState([])

  const getAllUser = async()=>{
      try {

        const response = await axios.get(`${API_URL}/admin/getalluser`);
        setUsers(response.data)
        console.log(response.data)
          
      } catch (error) {
          console.log(error,"Error occur while getting the data")
          
      }
    }
useEffect(()=>{
  getAllUser()
},[])

  return (
    <div className="w-screen h-full p-4  justify-center items-center grid grid-flow-col grid-rows-5 gap-4">
      {/* Card */}
      {users.map((user)=>(
         <div key={user.id}
         className="bg-red-400 w-60 rounded-md p-4 flex gap-4 items-center shadow-md">
        
        {/* Avatar */}
        <div className="w-20 h-20 bg-blue-500 rounded-full shrink flex items-center justify-center text-2xl">{user.username[0].toUpperCase()}</div>
        
        {/* User Info */}
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-blue-400 rounded-md px-2 py-1 text-white text-sm font-semibold">
            {user.username}
          </div>
          <div className="bg-blue-400 rounded-md px-2 py-1 text-white text-sm">
            {user.email.slice(0, 8)}
          </div>
        </div>
        </div>
      ))}
      
    </div>
  );
};

export default Alluser