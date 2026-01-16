import Structure from "./Structure"
import { useEffect, useState } from "react"
import axios from 'axios'

const Download = ({ url, sub, subname }) => {
  const [files, setFiles] = useState([])

  const fetchFiledata = async() => {
    try {
      const res = await axios.get(url)  
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
      <Structure notes={files} subject={subname}/>  
    </div>
  )
}

export default Download