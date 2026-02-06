import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home.jsx"

import Uploadfile from "./components/Uploadfile.jsx";

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
import Ccexp from "./components/Expcomponent/Ccexp.jsx";

import Notes from '../src/components/Notescomponents/Notes.jsx'
import Question from '../src/components/Qpcomponents/Question.jsx'
import Experiement from "./components/Expcomponent/Experiement.jsx";

import Mcexp from "./components/Expcomponent/Mcexp.jsx"
import Iotexp from "./components/Expcomponent/Iotexp.jsx";
import Cssexp from "./components/Expcomponent/Cssexp.jsx";
import Aiexp from "./components/Expcomponent/Aiexp.jsx";
import Spccexp from "./components/Expcomponent/Spccexp.jsx";

import Resource from "./components/Resource.jsx";
import Register from "./components/AuthComponents/Register.jsx";
import Login from "./components/AuthComponents/Login.jsx";
import Mainpage from "./components/Mainpage.jsx";
import Userinfo from "./components/AuthComponents/Userinfo.jsx";

function App() {
  return(
    <div className="h-full">
      <BrowserRouter> 
      
      <Routes>
        <Route path="/*" element={<Notfound/>}/>
        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Mainpage/>} />

        <Route path="/upload" element={<Uploadfile/>} />

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
        <Route path="/ccexp" element={<Ccexp/>}/>

        <Route path="/test" element={<Resource/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/main" element={<Mainpage/>}/>
        <Route path="/userprofile" element={<Userinfo/>}/>


        
        

      </Routes>
      
      </BrowserRouter>
     
    </div>
  ) 
}
export default App;