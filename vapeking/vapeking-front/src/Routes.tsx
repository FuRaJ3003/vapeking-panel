import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginView } from './components/user/LoginView';
import { MeView } from './components/user/MeView';
import { RegisterView } from './components/user/RegisterView';

export class Routes extends React.PureComponent {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/me" component={MeView} />
          </Switch>
        </BrowserRouter>
      );
    }
  }