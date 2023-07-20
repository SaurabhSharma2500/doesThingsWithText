import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [myVar, setVar] = useState('dark');
  const [myText, setText] = useState('Toggle dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setVar('light');
      setText('Toggle light mode');
      document.body.style.backgroundColor = 'grey';
      document.querySelector('textarea').style.backgroundColor = 'grey';
      document.querySelector('textarea').style.color = 'white';
      document.querySelector('body').style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      setVar('dark');
      setText('Toggle dark mode');
      document.body.style.backgroundColor = 'white';
      document.querySelector('textarea').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('textarea').style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Navbar
        title="myTitle"
        aboutText="aboutTextComponent"
        mode={mode}
        toggleMode={toggleMode}
        myVar={myVar}
        myText={myText}
      />
      {alert && <Alert alert={alert} closeAlert={closeAlert} />} {/* Render the alert if alert exists */}
      <div className="container my-3">
        {/* <About></About> */}
        <TextForm heading="Enter the text to analyze " showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
