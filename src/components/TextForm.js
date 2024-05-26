import React, {useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState("");

  const heandelUpclick=()=>{
    // console.log("Heandled OnClick");
   if(text!==""){
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("Text converted to Uppercase","success")
   }
   else{
    props.showalert("Insert Text converte in to Uppercase","warning")
   }
  }
  const heandelLoclick=()=>{
    
    if(text!==""){
    // console.log("Heandled OnClick");
      let newtext= text.toLowerCase();
      setText(newtext)
      props.showalert("Text converted to Lowercase","success")
     }
     else{
      props.showalert("Insert Text converte in to Lowercase","warning")
     }
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
let heandelClclick=()=>{
  setText("");
  props.showalert("Cleared text","success")
}
let heandelExtraSpaces=()=>{
  if(text!==""){
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Removed extra spaces","success")
     }
     else{
      props.showalert("Insert Text to remove extra spaces","warning")
     }
}
let heandelCopy=()=>{
  
  // if(text!==""){
    var text=document.getElementById("myBox");
    text.select(text.Selection);
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied clipbord","success")
  //  }
  //  else{
  //   props.showalert("Select text to copy","warning")
  //  }
}
  return (
    <>
        <div className='container' style={{color:props.mode==='ligth'?'black':'white'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            {/* <h4>{props.heaing}</h4> */}
            <textarea className="form-control" id="myBox"  value={text} onChange={heandelOnchange} style={{backgroundColor:'transparent',color:props.mode==='ligth'?'black':'white'}} placeholder='Enter text here' rows="8"></textarea>
            <button className='btn btn-primary mt-3' onClick={heandelUpclick}>Convert To Uppercase</button> 
            <button className='btn btn-primary mt-3 mx-2' onClick={heandelLoclick}>Convert To Lowerecase</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={heandelExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary mt-3 mx-2' onClick={heandelCopy}>Copy All Text</button>
            {/* <button className='btn btn-primary mt-3 mx-2' onClick={heandelPaste}>Paste Text</button> */}
            <button className='btn btn-primary mt-3 mx-2' onClick={heandelClclick}>Clear</button>
          </div>
        </div>
        <div className="container my-3" style={{backgroundColor:'transparent',color:props.mode==='ligth'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>words : {wordsLen(text)}  ||  characters : {charLen(text)}   ||  Letters : { charLen(text)} ||  Digites  : {0.008*wordsLen(text)}   ||  Minutes : {0.008*wordsLen(text)}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it here '}</p>
        </div>
    </>     
  )
}

