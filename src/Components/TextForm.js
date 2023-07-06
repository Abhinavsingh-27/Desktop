import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked "+ text);
        setText("You have clicked on handle Upclick")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case","success");

    }
    const handleDownClick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lower case","success");

    }
    const handleClearClick = ()=>{
        let newtext="";
        setText(newtext)
        props.showAlert("Text cleared","success");

    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleCopyClick = ()=>{
        // console.log("I am copied Text");
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");


    }
    const handleSpaceClick = ()=>{
        let newText = text.split(/[  ]+ /);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed ","success");

    }
    
    const [text, setText] = useState("");
    
return (
<>
<div className="mb-3">
<h1>{props.heading}</h1>
<textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8" style={{backgroundColor : props.mode==="dark"?"#121212":"#FFFFFF",color: props.mode==="dark"?"#FFFFFF":"#121212" }}></textarea>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick} >Remove Extra Spaces </button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>

</div>
<div className="container my-3">
    <h2> Text Summary</h2>
    <p> {text.length>0?text.split(" ").length:"0"} words and {text.length} characters </p>
    <p> {0.08 * text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text to Preview"}</p>
</div>
</>
  )
}
