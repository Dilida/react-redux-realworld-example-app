import agent from '../agent';
import React , {Component} from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Switch } from 'react-router-dom';
import PrivateRoute from './Common/PrivateRoute'
import { store } from '../store';
import { push } from 'react-router-redux';
import routes from '../components/routes'
import { Route } from 'react-router-dom'

import HomeLayout from '../components/Layout/HomeLayout'

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    return (
        <div>
          <Switch>
            {routes.map((route, index) => (
                <PrivateRoute
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                    isAuthed = {route.authNeed}
                    component= {route.component}
                    layout = {route.layout}
                />
            ))}

           
            {/* <Route path="/login"
              render={(props) => <Login {...props} selectedLanguage={this.props.selectedLanguage}/>}
              />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/@:username" component={Profile} /> */}
          </Switch>
        </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
