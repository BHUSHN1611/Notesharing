import { Menu, X ,User ,NotebookText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { API_URL } from '../config.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username,setUsername] = useState("")
  const navigate = useNavigate();

  const getUsername = async() => {
    try {
      const response = await axios.get(`${API_URL}/user/profile`,{withCredentials:true});
      const username = response.data.username;
      setUsername(username.toUpperCase())
      
    } catch (error) {
      console.log(error,"Error while getting the user")
      
    }
  }
  useEffect(()=>{
      getUsername()
    },[])

 //all navigation route 
  const Notesnavigate = () => {navigate("/viewallnotes")};
  const Expnavigate = () => {navigate("/viewallexp")};
  const Qpnavigate = () => {navigate("/viewallqp")};
  const Uploadnavigate = () => {navigate("/upload")};
  const Booksnavigate = () => {navigate("https://books.10xeng.xyz/books/sem7")}

  return (
    <nav className="bg-blue-600  shadow-md rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="/home" className="text-white font-bold text-2xl">
            Notes Sher Kar Bhai 
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-blue-200 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-6 text-white text-lg items-center">
            <button onClick={Notesnavigate} className="hover:text-blue-200 transition">
              NOTES
            </button>
            <button onClick={Expnavigate} className="hover:text-blue-200 transition">
              EXPERIMENT
            </button>
            <button onClick={Qpnavigate} className="hover:text-blue-200 transition">
              QUESTION-PAPER
            </button>
            <button onClick={Uploadnavigate} className="hover:text-blue-200 transition">
              UPLOAD-NOTES
            </button>
            <button onClick={Booksnavigate} className="hover:text-blue-200 transition bg-red-600 rounded-xl p-2">
             <NotebookText/>
            </button>
            <div className='flex justify-center items-center bg-red-500 px-3 py-2 rounded-lg'>
              <User size={28}/>         
              <a href="/userprofile" 
              className="ml-3">{username}</a>
            </div>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-2 flex flex-col gap-3 text-white text-lg">
            <a href="/userprofile"
            className='flex justify-center bg-red-500 px-1 py-2 rounded-md'>
              <User size={25}/>
              <div className='ml-2'>{username}</div>
            </a>
            <button onClick={Notesnavigate} className="hover:text-blue-200 transition">
              NOTES
            </button>
            <button onClick={Expnavigate} className="hover:text-blue-200 transition">
              EXPERIMENT
            </button>
            <button onClick={Qpnavigate} className="hover:text-blue-200 transition">
              QUESTION-PAPER
            </button>
            <button onClick={Uploadnavigate} className="hover:text-blue-200 transition">
              UPLOAD-NOTES
            </button>
            <button onClick={Booksnavigate} className="hover:text-blue-200 transition">
              Books
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}