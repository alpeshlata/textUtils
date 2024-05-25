
import './App.css';
// import About from './components/About';
import Navabaar from './components/Navabaar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
 const [mode,setmode]=useState('ligth');

 const toggleMode=()=>{
  if(mode==='ligth'){
    setmode("dark");
    document.body.style.backgroundColor='#656f8c';
  }
  else{
    setmode("ligth");
    document.body.style.backgroundColor='white';
  }
 }
  return (
    <>
      <Navabaar title='TextUtils' about='About TextUtils' mode={mode} toggleMode={toggleMode}/>
      <div className='container my-5'>
        <TextForm heading="Enter the text to analtze" mode={mode}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
