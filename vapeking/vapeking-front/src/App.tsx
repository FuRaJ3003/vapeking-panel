import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserInfo } from './components/User';


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // VAPEKING GQL SERVER
});

const App = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <h2>justVAPE<span role="img" aria-label="electric">⚡💭⚡</span></h2>
      
      <UserInfo/> 
    </div>
    </ApolloProvider>
);

export default App;