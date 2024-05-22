import React, {useState} from 'react'

export default function TextForm(props) {
  const heandelUpclick=()=>{
    // console.log("Heandled OnClick");
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const heandelOnchange=(event)=>{
    // console.log("heandel OnChange")
    setText(event.target.value);

  }
  const [text,setText]=useState();
  return (
        <div>
          <h1>{props.heading}</h1>
          <div class="mb-3">
            <h1>{props.heaing}</h1>
            <textarea className="form-control" id="myBox" value={text} placeholder='Enter text here' onChange={heandelOnchange} rows="13"></textarea>
            <button className='btn btn-primary mt-3' onClick={heandelUpclick}>Convert To Uppercase</button>
        </div>
        </div>
    
  )
}

