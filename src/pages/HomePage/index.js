import React, { Component } from 'react';
import Header from '../../component/header';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        const { inforLogin } = this.props;
        return (
            <div>
                <Header />
                <h1>Home Page</h1>
                <h3>
                    username : {inforLogin.userName}
                </h3>
                <h3>
                    password : {inforLogin.passWord}
                </h3>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        inforLogin: state.LoginReducer.inforLogin
    }
}

export default connect(mapStateToProps, null)(HomePage)