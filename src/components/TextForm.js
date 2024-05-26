import React,{useState} from 'react'


export default function TextForm(props) {
  const [text, setText]=useState();
  const handleUpClick=()=>{
    // console.log('Upper case was clicked'+text);
    let newText=text.toUpperCase()
    setText(newText)
    
  }
  const handleLowClick=()=>{
    // console.log('Lower case was clicked'+text);
    let newText=text.toLowerCase()
    setText(newText)
    
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
    
  }
 
  const handleToReverse=()=>{
   let  newText=text.split('').reverse().join('');
    setText(newText)
  }
  const handleToRemoveToSpace=()=>{
   let  newText= text.replace(/\s+/g, ' ').trim();;
    setText(newText)
  }
  const Cancel=()=>{
    setText("")
  }

  return (
    <>
  <div className="mb-3">

    <h1>{props.heading} </h1>
    <div className='mb-3'>
    <textarea className="form-control" value={text} id="mybox"  placeholder='Enter Your text' onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button className="btn btn-primary " onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
     <button className="btn btn-primary" onClick={handleToReverse}>Reverse</button>
    <button className="btn btn-primary" onClick={handleToRemoveToSpace}>Remove space</button> 
    <button className="btn btn-primary" onClick={Cancel}>Cancel</button> 
  </div>
    </>
  )
}
