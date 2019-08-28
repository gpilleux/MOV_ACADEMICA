import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
//import Visualizaciones from "./components/dashboard/Visualizaciones";
//Activity
import Activities from './components/activity/Activities';
import ActivityDetail from './components/activity/ActivityDetail';
import AddActivity from './components/activity/AddActivity';
//Visitor
import Visitor from './components/visitor/Visitor';
import AllVisitors from './components/visitor/AllVisitors';
import CreateVisitor from './components/visitor/CreateVisitor';
import DashboardMap from './components/dashboard/DashboardMap';
import AddVisit from './components/visitor/AddVisit';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Css
import './App.css';

// React Dates
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='main-container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/loqllevamos' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/posts/:id' component={Post} />

              <Route exact path='/activities' component={Activities} />
              <Route exact path='/activity-detail' component={ActivityDetail} />
              <Route exact path='/create-activity' component={AddActivity} />
              <Route exact path='/create-visitor' component={CreateVisitor} />
              <Route exact path='/add-visitor' component={AddVisit} />
              <Route exact path='/map' component={DashboardMap} />
              {/* <Route
                exact
                path="/visualizaciones"
                component={Visualizaciones}
              /> */}
              <Route exact path='/visitor' component={Visitor} />
              <Route exact path='/all-visitors' component={AllVisitors} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
