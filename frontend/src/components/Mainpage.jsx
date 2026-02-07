import React from 'react';
import { useState,useEffect } from 'react';
import { Menu, X ,BookOpen, Upload, Search, Users, ArrowRight, FileText, Sparkles  } from 'lucide-react';
import Footer from './Footer';


const Mainpage = () => {
  return (
    <div>
        <nav className="rounded-b-lg mb-4">
          <div className="max-w-7xl mx-auto px-1 py-4">
              <div className="flex items-center justify-between">
                  {/* Logo */}
                    <div>
                      <a href="/" className="text-md p-1 sm:text-lg md:text-xl lg:text-3xl font-bold text-black bg-yellow-300 lg:p-1 rounded-md">
                      Notes Sher Kar Bhai 
                    </a>
                    </div>

                    <div className='space-x-1 lg:space-x-3'>
                      <a href="/login" className="
                      text-md px-2 py-1 
                      sm:text-lg 
                      md:text-xl md:py-2 md:px-4
                      lg:text-xl lg:py-2 lg:px-4
                      text-black border-2 border-gray-300   rounded-md hover:text-gray-900 transition-all transform hover:scale-105 hover:shadow-xl">Login</a>
                    <a href="/register" className="
                    text-md px-2 py-1 
                    sm:text-lg 
                    md:text-xl md:py-2 md:px-4 
                    lg:text-xl lg:py-2 lg:px-4 
                      bg-blue-600 text-white 
                    rounded-md 
                    hover:bg-blue-500 
                    transition-all transform hover:scale-105 hover:shadow-xl">Sign-up</a>
                    </div>
                
              </div>
          </div>

        </nav>
        {/* /*Image section */}
       <div className='flex justify-center items-center'>
            <img className="w-full max-w-7xl h-auto object-cover rounded-lg px-4" 
            src="/context.png" alt="contextpng"/>
       </div>
    {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tighter">
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
      <Footer bgcolor={'yellow-300'} color={'blue-600'}/>
      
    </div>
  )
}

export default Mainpage;