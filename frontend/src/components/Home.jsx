import { BookOpen, Upload, Search, Users, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import Navbar from "../components/Navbar.jsx"
import Footer from './Footer.jsx';


const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6 sm:mb-8">
              <Sparkles className="text-indigo-600" size={18} />
              <span className="text-sm font-semibold text-indigo-700">Your Academic Success Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to
              <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Notes Sher Kar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10 px-4">
              Share knowledge, ace your exams, and build a collaborative learning community. Access notes, experiments, and question papers all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button
                onClick={()=>{
                  navigate("/viewallnotes")
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Browse Notes
                <ArrowRight size={20} />
              </button>
              <button
                onClick={()=>{
                  navigate("/upload")
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all transform hover:scale-105"
              >
                <Upload size={20} />
                Upload Notes
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Stats Section */}
       <Footer bgcolor={'blue-600'} color={'white'}/>
      
    </div>
  );
};

export default Home;