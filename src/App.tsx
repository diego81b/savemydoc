import React, { Component } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.less';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Home from './pages/Home';
// import { auth } from './services/firebase';

type AppState = {
  loading: boolean;
  authenticated: boolean
}

export interface RouteProps {
  authenticated: boolean,
  path: string
}

const PrivateRoute: React.FC<RouteProps> = ({ children, authenticated,  ...rest }) => {
    return (
    <Route exact
      {...rest}
      render={(props) => !!authenticated ? children : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

const PublicRoute: React.FC<RouteProps> = ({ children, authenticated, ...rest }) => {
  return (
  <Route exact
    {...rest}
    render={(props) => !authenticated ? children : <Redirect to='/chat' />}
  />
)
}

const App: React.FC = () => {
  const [appState, setAppState] = React.useState<AppState>({ loading: false, authenticated: true});

  return !!appState.loading ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/chat/:name" authenticated={appState.authenticated}>
            <Chat/>
        </PrivateRoute>
        <PublicRoute path="/login" authenticated={appState.authenticated}>
          <Login/>
        </PublicRoute>
      </Switch>
    </Router>
  );
};

export default App;
