
import React, {Component} from 'react';
import { connect } from 'react-redux';
class HomeLayout extends React.Component {

    render() {
        return (
            <div className="page page-login">
                <div>this is first layout</div>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(HomeLayout);