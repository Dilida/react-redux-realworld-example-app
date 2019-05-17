
import React from 'react';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';



class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.checkAuth();
    }
    checkAuth () {

        if( this.props.authNeed && !window.sessionStorage.getItem('jwt')) alert("請先登入後再進入")
    }
    render() {
        const {path, exact, authNeed} = this.props;
        if(authNeed && !window.sessionStorage.getItem('jwt')){
            return (
                <Redirect to={{ pathname: '/login'}} />
            );
        } else {
            return (
                <Route
                    path={path}
                    exact={exact}
                    render={(props) => <this.props.component {...props} />}
                />
            );
        }

    }
}

export default connect()(PrivateRoute);