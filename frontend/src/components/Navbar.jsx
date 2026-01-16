import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

 //all navigation route 
  const Notesnavigate = () => {navigate("/viewallnotes")};
  const Expnavigate = () => {navigate("/viewallexp")};
  const Qpnavigate = () => {navigate("/viewallqp")};
  const Uploadnavigate = () => {navigate("/upload")};


  return (
    <nav className="bg-linear-to-r from-indigo-600 to-blue-600  shadow-md rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="text-white font-bold text-2xl">
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
            <a href="/login" className="bg-linear-to-r from-amber-600 to-orange-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-xl">
              Sign-up
            </a>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-2 flex flex-col gap-3 text-white text-lg">
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
            <a href="/login" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition inline-block text-center mt-2">
              Sign-up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}