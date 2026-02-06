import Expstructure from "../Structure/Expstructure.jsx";
import { useEffect, useState } from "react"
import axios from 'axios'
import { API_URL } from '../../config.js';
import Navbar from '../Navbar.jsx'
import { useNavigate } from "react-router";


const Expdownload = ({ url, sub, subname }) => {
  const [files, setFiles] = useState([])
  const [auth,setAuth] = useState(true)
  const navigate = useNavigate()

  const fetchFiledata = async() => {
    try {
      const res = await axios.get(`${API_URL}${url}`,{withCredentials:true})  
      const filedata = res.data.filter(item => item.subject === sub)  
      setFiles(filedata)
    } catch (err) {
      console.error("Error fetching notes", err)
      setAuth(false)
      setTimeout(function(){
        navigate("/register")
      },4000)
    
    }
  }
  
  useEffect(() => {
    fetchFiledata()
  }, [])  
  
  return (

    <div>
      <Navbar/>
      <Expstructure  notes={files} subject={subname}/>
      {auth ? <h1></h1> : <div className="flex justify-center items-center flex-col">
        <div className="mb-2">
          <p className="text-red-500 text-xl font-bold">Sign-Up first</p>
        </div>
        <div className="bg-blue-500 p-2 rounded">
          <h1 className="text-2xl font-bold text-white">Your redirecting to Sign up page ...</h1>
          
        </div>
          
        </div>}
       
    </div>
  )
}

export default Expdownload