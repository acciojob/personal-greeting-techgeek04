import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const submitButton = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('');
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={submitButton}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
};

export default App;
