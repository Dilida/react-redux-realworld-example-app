
import React from 'react';
import { connect } from 'react-redux';



class HomeLayout extends React.Component {

    render() {
        console.log(this.props)

        return (
            <div className="page page-login">
                <div>this is first layout</div>
                {/*<div className="main">{component}</div>*/}
            </div>
        )
    }
}

export default connect()(HomeLayout);