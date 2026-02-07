import axios from 'axios'
import { API_URL } from '../config.js';
import { useState , useEffect} from 'react';

const Footer = ({bgcolor,color}) => {

  const [NumbersofNotes,setNumberofnotes] = useState(0)
  const [NumbersofExp,setNumberofexp] = useState(0) 
  const [NumbersofQp,setNumberofqp] = useState(0)
  const [NumbersofUser,setNumberofuser] = useState(0)

  const getNumbers = async() => {
    try {
     const NumbersofNotes = await axios.get(`${API_URL}/file/notes/count`);
     setNumberofnotes(NumbersofNotes.data.count)
     const NumbersofExp = await axios.get(`${API_URL}/file/exp/count`);
     setNumberofexp(NumbersofExp.data.count)
     const NumbersofQp = await axios.get(`${API_URL}/file/qp/count`);
     setNumberofqp(NumbersofQp.data.count);
     const NumberofUser = await axios.get(`${API_URL}/file/user/count`);
     setNumberofuser(NumberofUser.data.count);

    } catch (error) {
      console.error("Home API error:", error.response?.data || error.message)
    }
  } 
  useEffect(()=>{
    getNumbers()
  },[])

  return (
    <div className={`bg-${bgcolor}  py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold text-${color} mb-2`}>{NumbersofNotes}</div>
              <div className={`text-${color} text-sm sm:text-base`}>Notes Shared</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold text-${color} mb-2`}>{NumbersofExp}</div>
              <div className={`text-${color} text-sm sm:text-base`}>Experiments</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold text-${color} mb-2`}>{NumbersofQp}</div>
              <div className={`text-${color} text-sm sm:text-base`}>Question Papers</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold text-${color} mb-2`}>{NumbersofUser}</div>
              <div className={`text-${color} text-sm sm:text-base`}>Active Users</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer