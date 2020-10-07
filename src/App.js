import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Message from './components/Message/Message';
import Navigation from './components/Navigation/Navigation';

const API = 'https://randomuser.me/api?results=5';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => {
        if (res.ok) return res.json();
        throw Error('no data');
      })
      .then(data => {
        const { results } = data;
        this.setState({ users: results });
      })
      .catch()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Navigation />
            <div className="App">
              {
                this.state.users.map(({
                  name: { first, last },
                  picture: { medium },
                  login: { username },
                  location: { country, city },
                  id: { value = 0 }
                }, index) => {
                  return (
                    <Message
                      name={`${first} ${last}`}
                      logo={medium}
                      text={`${country}, ${city}`}
                      title={username}
                      key={value + index}
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

}

export default App;