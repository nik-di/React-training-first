import React from 'react';
import './App.css';
import logo from './logo.svg';
import Message from './components/Message/Message';

function App() {
  const data = [
    { id: 1, name: "Вася", logo, title: "Hello, i am Вася!", text: "React is awesome lib" },
    { id: 2, name: "Петя", logo, title: "Hello, i am Петя!", text: "React is lib" },
    { id: 3, name: "Настя", logo, title: "Hello, i am Настя!", text: "World is awesome" },
    { id: 4, name: "Дима", logo, title: "Hello, i am Дима!", text: "Hey, i am learn React" },
  ];

  return (
    <div className="App">
      {
        data.map(({ name, logo, text, title, id }) => {
          return (
            <Message
              name={name}
              logo={logo}
              text={text}
              title={title}
              key={id}
            />
          )
        })
      }
    </div>
  );
}

export default App;