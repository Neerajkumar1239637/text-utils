import React, {useState} from 'react'

export default function TextForm(props) {
    let handleUpclick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        // setText('you have set the text')
       props.showAlert("converted to UpperCase!","Success");
    }
    let handleLowclick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        // setText('you have set the text')
       props.showAlert("converted to LowerCase!","Success");
    }
    let handledlclick=()=>{
      // console.log("uppercase was clicked"+text);
      let newText='';
      setText(newText);
      props.showAlert("Text has been removed","Success");
    }
    let handleonChange=(event)=>{
        // console.log("onchange was clicked");
        setText(event.target.value);
    }
    let [text, setText]= useState(' ');
    // setText("New text");
    
  return (
    <>

    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleonChange} style ={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-5 my-1" onClick={handleUpclick}>Convet to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-5 my-1" onClick={handleLowclick}>convet to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-5 my-1" onClick={handledlclick}>clear text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview"}</p>

</div>
    </>
  )
}
