import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home.jsx"

import Uploadfile from "./components/Uploadfile.jsx";

import Notfound from "./components/Notfound.jsx";

import Bdanotes from "./components/Notescomponents/Bdanotes.jsx";
import Mlnotes from "./components/Notescomponents/Mlnotes.jsx"
import Cslnotes from "./components/Notescomponents/Cslnotes.jsx"
import Nlpnotes from "./components/Notescomponents/Nlpnotes.jsx";
import Irnotes from "./components/Notescomponents/Irnotes.jsx"


import Bdaqp from "./components/Qpcomponents/Bdaqp.jsx";
import Mlqp from "./components/Qpcomponents/Mlqp.jsx"
import Cslqp from './components/Qpcomponents/Cslqp.jsx'
import Nlpqp from "./components/Qpcomponents/Nlpqp.jsx"
import Irqp  from "./components/Qpcomponents/Irqp.jsx"

import Notes from '../src/components/Notescomponents/Notes.jsx'
import Question from '../src/components/Qpcomponents/Question.jsx'
import Experiement from "./components/Expcomponent/Experiement.jsx";

import Bdaexp from "./components/Expcomponent/Bdaexp.jsx"
import Mlexp from "./components/Expcomponent/Mlexp.jsx";
import Cslexp from "./components/Expcomponent/Cslexp.jsx";
import Irexp from "./components/Expcomponent/Irexp.jsx";
import Nlpexp from "./components/Expcomponent/Nlpexp.jsx";

import Ccexp from "./components/Expcomponent/Bdaexp.jsx";

import Resource from "./components/Resource.jsx";
import Register from "./components/AuthComponents/Register.jsx";
import Login from "./components/AuthComponents/Login.jsx";
import Mainpage from "./components/Mainpage.jsx";
import Userinfo from "./components/AuthComponents/Userinfo.jsx";
import Alluser from './components/AdminComponents/Alluser.jsx';

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

        
          <Route path="/bdanotes" element={<Bdanotes/>}/>
          <Route path="/mlnotes" element={<Mlnotes/>}/>
          <Route path="/nlpnotes" element={<Nlpnotes/>}/>
          <Route path="/irnotes" element={<Irnotes/>}/>
          <Route path="/cslnotes" element={<Cslnotes/>}/>

          <Route path="/bdaqp" element={<Bdaqp/>}/>
          <Route path="/mlqp" element={<Mlqp/>}/>
          <Route path="/nlpqp" element={<Nlpqp/>}/>
          <Route path="/irqp" element={<Irqp/>}/>
          <Route path="/cslqp" element={<Cslqp/>}/>

          <Route path="/bdaexp" element={<Bdaexp/>}/>
          <Route path="/mlexp" element={<Mlexp/>}/>
          <Route path="/cslexp" element={<Cslexp/>}/>
          <Route path="/irexp" element={<Irexp/>}/>
          <Route path="/nlpexp" element={<Nlpexp/>}/>
          
          <Route path="/ccexp" element={<Ccexp/>}/>

          <Route path="/test" element={<Resource/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/main" element={<Mainpage/>}/>
          <Route path="/userprofile" element={<Userinfo/>}/>

          <Route path="/alluser" element={<Alluser/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  ) 
}
export default App;