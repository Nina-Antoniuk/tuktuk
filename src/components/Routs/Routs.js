import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent';

const NewsFeed = lazy(() =>
  import('../../pages/NewsFeed' /* webpackChunkName: 'News Page'*/),
);
const Profile = lazy(() =>
  import('../../pages/Profile' /* webpackChunkName: 'Profile'*/),
);

function Routs({ getFirstVideo, firstVideo }) {
  return (
    <div className="content">
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route exact path="/">
            <NewsFeed getVideo={getFirstVideo} />
          </Route>
          <Route path="/profile/:id">
            <Profile firstVideo={firstVideo} />
          </Route>
          <Route>
            <Redirect exact to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
export default Routs;
