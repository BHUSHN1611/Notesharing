import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="/viewallnotes" className="hover:text-blue-200 transition">
              NOTES
            </a>
            <a href="/viewallexp" className="hover:text-blue-200 transition">
              EXPERIMENT
            </a>
            <a href="/viewallqp" className="hover:text-blue-200 transition">
              QUESTION-PAPER
            </a>
            <a href="/upload" className="hover:text-blue-200 transition">
              UPLOAD-NOTES
            </a>
            <a href="/login" className="bg-linear-to-r from-amber-600 to-orange-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-xl">
              Sign-up
            </a>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-2 flex flex-col gap-3 text-white text-lg">
            <a href="/viewallnotes" className="hover:text-blue-200 transition py-2">
              NOTES
            </a>
            <a href="/viewallexp" className="hover:text-blue-200 transition py-2">
              EXPERIMENT
            </a>
            <a href="/viewallqp" className="hover:text-blue-200 transition py-2">
              QUESTION-PAPER
            </a>
            <a href="/upload" className="hover:text-blue-200 transition py-2">
              UPLOAD-NOTES
            </a>
            <a href="/login" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition inline-block text-center mt-2">
              Sign-up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}