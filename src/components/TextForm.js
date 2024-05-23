import React, {useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState("");

  const heandelUpclick=()=>{
    // console.log("Heandled OnClick");
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const heandelLoclick=()=>{
    // console.log("Heandled OnClick");
    let newtext= text.toLowerCase();
    setText(newtext)
  }
  const heandelOnchange=(event)=>{
    // console.log("heandel OnChange")
    setText(event.target.value);
  }

  let  wordsLen=(str)=> {
    if(str!==""){
      const array = str.trim().split(/\s+/);
        return array.length;  
      
      }
      else{
        return 0;  
      }
    
}

let charLen=(str)=>{
    var regex = /\S/g; // split on non-whitespace characters
    return (str.split(regex).length - 1);
}
// let letterLen=(str)=>{
//   let regex = /[a-zA-Z]/g;
// console.log(str.match(regex).length);
// }
  return (
    <>
        <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <h1>{props.heaing}</h1>
            <textarea className="form-control" id="myBox" value={text} onChange={heandelOnchange} placeholder='Enter text here' rows="10"></textarea>
            <button className='btn btn-primary mt-3' onClick={heandelUpclick}>Convert To Uppercase</button>
            
            <button className='btn btn-primary mt-3 mx-2' onClick={heandelLoclick}>Convert To Lowerecase</button>
          </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>words : {wordsLen(text)}  ||  characters : {charLen(text)}   ||  Letters : { charLen(text)} ||  Digites  : {0.008*wordsLen(text)}   ||  Minutes : {0.008*wordsLen(text)}</p>
      
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>    
    
  )
}

