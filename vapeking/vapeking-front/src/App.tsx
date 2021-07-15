import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserInfo } from './components/User';


import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Witaj w panelu justVAPE!</h1>
        </header>
        <p className="App-intro">
          :D
        </p>
      </div>
    )
  }
}

export default App;