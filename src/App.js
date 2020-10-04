import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Message from './components/Message/Message';
import Navigation from './components/Navigation/Navigation';

function App() {
  const messageData = [
    { id: 'id1', name: "Вася", logo, title: "Hello, i am Вася!", text: "React is awesome lib" },
    { id: 'id2', name: "Петя", logo, title: "Hello, i am Петя!", text: "React is lib" },
    { id: 'id3', name: "Настя", logo, title: "Hello, i am Настя!", text: "World is awesome" },
    { id: 'id4', name: "Дима", logo, title: "Hello, i am Дима!", text: "Hey, i am learn React" },
  ];

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Navigation />
          <div className="App">
            {
              messageData.map(({ name, logo, text, title, id }) => {
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
        </Route>
        <Route path='/hello'>
          <Navigation />
          <h1>Hello!</h1>
        </Route>
        <Route path='/page'>
          <Navigation />
          <h1>Page!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;