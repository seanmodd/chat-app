import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch, Route } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route>
        <SignIn path="/signin" />
      </Route>
      <PrivateRoute>
        <Home path="/home" />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
