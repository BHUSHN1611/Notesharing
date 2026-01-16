import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home.jsx"

import Uploadfile from "./components/Uploadfile.jsx";

import Navbar from "./components/Navbar.jsx";


import Notfound from "./components/Notfound.jsx";
import Mcnotes from "./components/Notescomponents/Mcnotes.jsx";
import Spccnotes from "../src/components/Notescomponents/Spccnotes.jsx"
import Cssnotes from "../src/components/Notescomponents/Cssnotes.jsx"
import Ainotes from "../src/components/Notescomponents/Ainotes.jsx";
import Iotnotes from "../src/components/Notescomponents/Iotnotes.jsx"


import Mcqp from "./components/Qpcomponents/Mcqp.jsx";
import Aiqp from "./components/Qpcomponents/Aiqp.jsx"
import Spccqp from './components/Qpcomponents/Spccqp.jsx'
import Iotqp from "./components/Qpcomponents/Iotqp.jsx"
import Cssqp  from "./components/Qpcomponents/Cssqp.jsx"

// import Signup from "./components/Auth/Signup.jsx";

import Notes from '../src/components/Notescomponents/Notes.jsx'
import Question from '../src/components/Qpcomponents/Question.jsx'
import Experiement from "./components/Expcomponent/Experiement.jsx";

import Mcexp from "../src/components/Expcomponent/Mcexp.jsx"
import Iotexp from "../src/components/Expcomponent/Iotexp.jsx";
import Cssexp from "../src/components/Expcomponent/Cssexp.jsx";
import Aiexp from "../src/components/ExpComponent/Aiexp.jsx";
import Spccexp from "./components/ExpComponent/Spccexp.jsx";
import Download from "./components/Download.jsx";
// import Login from "./components/Auth/Login.jsx";




function App() {
  return(
    <div className="h-full m-2  bg-linear-to-br from-blue-50 to-indigo-100">
      <BrowserRouter> 

      <Navbar/>
       
      <Routes>
        <Route path="/*" element={<Notfound/>}/>
        <Route path="/" element={<Home />} />

        {/* <Route path="/signup" element={<Signup/>} /> */}
        {/* <Route path="/login" element={<Login/>} /> */}

        

        <Route path="/upload" element={<Uploadfile/>} />
        {/* <Route path="/viewall" element={<Viewall/>}/> */}
        
        {/* <Route path="/viewallnotes" element={<Viewallnotes/>}/> */}
        <Route path="/viewallnotes" element={<Notes/>}/>
        <Route path="/viewallqp" element={<Question/>}/>
        <Route path="/viewallexp" element={<Experiement/>}/>

       
        <Route path="/mcnotes" element={<Mcnotes/>}/>
        <Route path="/spccnotes" element={<Spccnotes/>}/>
        <Route path="/ainotes" element={<Ainotes/>}/>
        <Route path="/iotnotes" element={<Iotnotes/>}/>
        <Route path="/cssnotes" element={<Cssnotes/>}/>

        <Route path="/mcqp" element={<Mcqp/>}/>
        <Route path="/spccqp" element={<Spccqp/>}/>
        <Route path="/aiqp" element={<Aiqp/>}/>
        <Route path="/iotqp" element={<Iotqp/>}/>
        <Route path="/cssqp" element={<Cssqp/>}/>

        <Route path="/mcexp" element={<Mcexp/>}/>
        <Route path="/spccexp" element={<Spccexp/>}/>
        <Route path="/aiexp" element={<Aiexp/>}/>
        <Route path="/iotexp" element={<Iotexp/>}/>
        <Route path="/cssexp" element={<Cssexp/>}/>
        

      </Routes>
      
      </BrowserRouter>
     
    </div>
  ) 
}
export default App;