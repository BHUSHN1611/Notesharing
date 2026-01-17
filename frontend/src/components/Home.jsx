import React, { useEffect, useState } from 'react';
import { BookOpen, Upload, Search, Users, ArrowRight, FileText, Sparkles } from 'lucide-react';
import axios from 'axios'
import { API_URL } from '../config.js';
import { useNavigate } from 'react-router';


const Home = () => {
  console.log(`${API_URL}/file/viewexp`)
  const [NumbersofNotes,setNumberofnotes] = useState(0)
  const [NumbersofExp,setNumberofexp] = useState(0)
  const [NumbersofQp,setNumberofqp] = useState(0)

  const navigate = useNavigate()

  const getNumbers = async() => {
    try {
     const notesres = await axios.get(`${API_URL}/file/viewnotes`);
     const NumbersofNotes = notesres.data.length;
     setNumberofnotes(Number(NumbersofNotes))
     const expres = await axios.get(`${API_URL}/file/viewexp`)
     const NumbersofExp = expres.data.length;
     setNumberofexp(Number(NumbersofExp))
     const qpres = await axios.get(`${API_URL}/file/viewqp`)
     const NumbersofQp = qpres.data.length;
     setNumberofqp(Number(NumbersofQp))
    } catch (error) {
      console.error("Home API error:", error.response?.data || error.message)
    }

  } 
  useEffect(()=>{
    getNumbers()
  },[])


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
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

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-gray-600 text-lg">Comprehensive resources at your fingertips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Study Notes</h3>
            <p className="text-gray-600 text-sm">
              Access comprehensive notes for all subjects, curated by students like you.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Experiments</h3>
            <p className="text-gray-600 text-sm">
              Find practical experiments and lab reports to ace your practicals.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Search className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Question Papers</h3>
            <p className="text-gray-600 text-sm">
              Practice with previous year question papers and exam patterns.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-orange-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Join a thriving community of learners sharing knowledge together.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{NumbersofNotes}</div>
              <div className="text-indigo-100 text-sm sm:text-base">Notes Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{NumbersofExp}</div>
              <div className="text-indigo-100 text-sm sm:text-base">Experiments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{NumbersofQp}</div>
              <div className="text-indigo-100 text-sm sm:text-base">Question Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4</div>
              <div className="text-indigo-100 text-sm sm:text-base">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-linear-to-r from-blue-50 to-indigo-100 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already benefiting from our shared resources.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;