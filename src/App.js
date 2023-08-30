// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },3000)

  }
  let toggleMode=( s)=>{

    if(mode==='light'){
    setMode('dark');

    document.body.style.backgroundColor='#042743'
  showAlert("Dark Mode has been enabled","sucess")}
    else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled","success")
  
  }
  }
  return (
    <>
    <Router>

      <Navbar title='TEXTUTILS' aboutText="about" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about"  element= {<About mode={mode} />}>
           
          
            </Route>
          <Route  exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text you want to analyze" mode={mode}/>}>
         
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
