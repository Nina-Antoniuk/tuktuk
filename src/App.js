import { lazy, Suspense } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-js-loader';
import './App.scss';

const NewsFeed = lazy(() =>
  import('./pages/NewsFeed' /* webpackChunkName: 'News Page'*/),
);
const Profile = lazy(() =>
  import('./pages/Profile' /* webpackChunkName: 'Profile'*/),
);

function App() {
  return (
    <div className="backGround">
      <div className="App">
        <nav className="Nav">
          <ul className="NavList">
            <li>
              <NavLink
                exact
                to="/"
                className="NavLink"
                activeClassName="activeLink"
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/profile/${'dave.xp'}`}
                className="NavLink"
                activeClassName="activeLink"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Suspense
            fallback={
              <div className="Loader">
                <Loader
                  type="bubble-top"
                  bgColor={'#FFFFFF'}
                  color={'#FFFFFF'}
                  size={150}
                />
              </div>
            }
          >
            <Switch>
              <Route exact path="/">
                <NewsFeed />
              </Route>
              <Route path="/profile/:id">
                <Profile />
              </Route>
              <Route>
                <Redirect exact to="/" />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
