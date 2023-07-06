
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor = "#121212"
    document.body.style.color = "#FFFFFFDB"
    showAlert("Dark Mode has been enabled","success");
    }  
    else{
    setMode('light');
    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "#000000"
    showAlert("Light Mode has been enabled","success");

  }
}
  

  return (
    <>
   <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3" >
    <TextForm mode={mode} showAlert={showAlert} heading="Enter the text below to analyze "/> 
   </div>
   
   {/* <About/> */}
   
    </>
  );
}

export default App;
