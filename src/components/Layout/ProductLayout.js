
import React from 'react';
import { connect } from 'react-redux';
class Product extends React.Component {

    render() {
        return (
            <div className="page page-login">
                <div>this is second layout</div>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(Product);