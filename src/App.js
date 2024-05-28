
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navabaar from './components/Navabaar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,

// } from 'react-router-dom';

function App() {
 const [mode,setmode]=useState('ligth');
 const [alert,setalert]=useState(null);
 const showalert=(message,Type)=>{
  setalert({
    sms:message,
    type:Type
  })
  setTimeout(() => {
    setalert(null);
  },1500);
 }
 const toggleMode=()=>{
  if(mode==='ligth'){
    setmode("dark");
    document.body.style.backgroundColor='#1b2475';
    showalert("Dark Mode Enabled","success");
  }
  else{
    setmode("ligth");
    document.body.style.backgroundColor='white';
    
    showalert("Light Mode Enabled","success");
  }
 }
  return (

    <>
      <Navabaar title='TextUtils' home='Home' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm heading="Enter the text to analtze" showalert={showalert} mode={mode}/>
   </> 
    
    // <BrowserRouter>
    //     <Navabaar title='TextUtils' about='About' home='Home' mode={mode} toggleMode={toggleMode}/>
    //     <Alert alert={alert}/>
    //     <div className='container my-5'>
    //       <Routes>
    //         <Route exact path="/" element={<TextForm heading="Enter the text to analtze" showalert={showalert} mode={mode}/>}/>

    //         <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
              
                       
    //       </Routes>
    //     </div>
    // </BrowserRouter>      
   
  );
}

export default App;
