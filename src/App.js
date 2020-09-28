import React from 'react';
import './App.css';
import logo from './logo.svg';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Message
        logo={logo}
        name="Вася"
        title="Hello, React!"
        text="React is awesome lib"
      />
      <Message
        logo={logo}
        name="Петя"
        title="Hello, React from Петя!"
        text="It's cool"
      />
    </div>
  );
}

export default App;