import * as React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.less';
import LoadingState from './components/LoadingState';
import { FirebaseContext } from './services/firebase';
import { AuthUserContext } from './services/session';

type AppState = {
  loading: boolean;
  authenticated: boolean
}

export interface RouteProps {
  path: string
}

const Chat = React.lazy(() => import('./pages/Chat'));
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <AuthUserContext.Consumer>
      {authenticated =>
        <Route
          {...rest}
          render={(props) => !!authenticated ? children : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
      }
    </AuthUserContext.Consumer>
  )
}

const PublicRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <AuthUserContext.Consumer>
      {authenticated =>
        <Route
          {...rest}
          render={(props) => !authenticated ? children : <Redirect to='/chat' />}
        />
      }
    </AuthUserContext.Consumer>
  )
}

const App: React.FC = () => {
  const [authUser, setAuthUser] = React.useState<firebase.User | null | undefined>();
  const [loading, setLoading] = React.useState(false);
  const { auth } = React.useContext(FirebaseContext);

  React.useEffect(() => {
    console.log('APP useEffect');
    setLoading(true);
    setAuthUser(null);
    const listener = auth.onAuthStateChanged(
      authUser => {
        setLoading(false);
        return authUser
          ? setAuthUser(authUser)
          : setAuthUser(null);
      }, error => {
        setLoading(false);
        console.log(error);
      }
    );
    return () => listener();
  }, [auth]);

  return !!loading ? <LoadingState /> : (
      <AuthUserContext.Provider value={authUser}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/chat">
              <Chat/>
            </PrivateRoute>
            <PublicRoute path="/login">
              <Login />
            </PublicRoute>
          </Switch>
        </Router>
      </AuthUserContext.Provider>
  );
};

export default App;
