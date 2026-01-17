import Expstructure from "../Structure/Expstructure.jsx";
import { useEffect, useState } from "react"
import axios from 'axios'
import { API_URL } from '../../config.js';


const Expdownload = ({ url, sub, subname }) => {
  const [files, setFiles] = useState([])

  const fetchFiledata = async() => {
    try {
      const res = await axios.get(`${API_URL}${url}`)  
      const filedata = res.data.filter(item => item.subject === sub)  
      setFiles(filedata)
    } catch (err) {
      console.error("Error fetching notes", err)
    }
  }
  
  useEffect(() => {
    fetchFiledata()
  }, [])  
  
  return (
    <div>
      <Expstructure  notes={files} subject={subname}/>  
    </div>
  )
}

export default Expdownload