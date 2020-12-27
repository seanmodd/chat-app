import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <Route>
        <SignIn path="/signin" />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
