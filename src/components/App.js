
import React from "react";
import './../styles/App.css';
import {usestate} from "react";

const [name, setName] = useState('');
const [greeting, setGreeting] = useState('');
const submitButton = (e) => {
  e.preventDefault();
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('');
    }
}
const App = () => {
  return (
    <div onSubmit = {submitButton}>
        {/* Do not remove the main div */}
    <label>Enter your name:</label>
    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} />
    <button type = "submit">Submit</button>
    </div>
  )
}

export default App
