import React, { useState } from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpperCase = ()=> {

      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase!!");
      
    }
    const handleLowerCase = ()=> {
      
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!!");

  }
  const handleClearText = ()=> {

      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared Successfully. ");


  }
  const handleOnChange = (event)=> {

      setText(event.target.value);
  }


  const handleCopy = ()=>{
    var text = document.getElementById('getForm');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!!");

  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!!");

  }


  return (
    <>

    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mx-8">

            <textarea  className="form-control" value={text} onChange={handleOnChange} id="getForm" rows="6" />

            <button className="btn btn-dark mx-2 my-3" onClick={handleUpperCase}>Convert To UpperCase</button>
            <button className="btn btn-dark mx-2 my-3" onClick={handleLowerCase}>Convert To LowerCase</button>
            <button className="btn btn-dark mx-2 my-3" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-dark mx-2 my-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-dark mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>   
      {/* <p> words and {text.length()} characters</p>  */}
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> Average minute to read your text: {0.008 * text.split(" ").length}</p>

      <div className="container ">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>

    </div>
    

    </>
  )
}  

