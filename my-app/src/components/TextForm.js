// import React, {useState} from 'react'


// export default function TextForm(props) {

//     const upperHandler=()=>
//     {
//         console.log("Upper case was clicked");
//         let newText = text.toUpperCase();
//         setText(newText);
//     }

//     const handleOnChange = (event) =>
//     {
//        setText(event.target.value);
//     }

//     const[text, setText] = useState('Enter text here');
//   return (
//     <>
//   <div className="form-group">
//     <h1>{props.heading}</h1>
//     <label htmlFor="myBox">{props.heading}  </label>
//     <textarea className="form-control" id="exampleFormControlTextarea1"onChange={handleOnChange} value={text} rows="8"></textarea>
//   </div>
// <button className = "btn btn-primary my-2" onClick={upperHandler}>Convert to uppercase</button> 


// <div className="container my-3">
//   <h1>Your text summary</h1>
//   <p>My text has {text.split(" ").length-1} words, {text.length} characters</p>
// </div>
// </>
//   )
// }

import React, { useState } from 'react';
import App from '../App';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const upperHandler = () => {
    console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const wordCount = text.split(" ").filter((word) => word !== '').length;
  const charCount = text.replace(/\s/g, '').length;

  const lowerHandler =() =>
  {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText =() =>
  {
    let clearedText = "";
    setText(clearedText);
  }

  return (
    <>
   < div className="container" style={{color:props.myVal}}>
      <div className="form-group" >
        <h1>{props.heading}</h1>
        <label htmlFor="myBox">{props.heading}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" 
        onChange={handleOnChange}  value={text} rows="8" ></textarea>
      </div>
      <button className="btn btn-primary my-2" onClick={upperHandler}>Convert to uppercase</button>
     < button className="btn btn-primary my-2 mx-2" onClick={lowerHandler}>Convert to lowercase</button>
     < button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
      

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>My text has {wordCount} words, {charCount} characters</p>
        <p>{0.008*wordCount} minutes requried to read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
      </div>
    </>
  )
}

