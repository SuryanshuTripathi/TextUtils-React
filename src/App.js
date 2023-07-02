// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)



  }
  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/"></Route> element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes><TextForm showAlert={showAlert} heading="Enter the text to analyze below" /> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;


