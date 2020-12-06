import React, { Component } from 'react';
import "./styles.css";
import { connect } from 'react-redux';
import { onLogin } from '../../redux/actions/login';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            error: '',
        }
    }

    handleLoginAction = () => {
        alert('Hello, Welcome to React Application!')
    }

    getValueForm = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = async () => {
        const { userName, passWord } = this.state;
        if (userName === 'admin' && passWord === '12345') {
            await this.props.onLogin({ userName, passWord });
            this.props.history.push("/home");
        }else{
            this.setState({error: 'Username or password wrong!'})
        }
    }

    render() {
        const { userName, passWord, error } = this.state;
        return (
            <div className="bg-image">
                <div className="login-form">
                    <div className="title">
                        <h3 className="text">Login</h3>
                        <p className="text">Are you new here? <a href="/login">Sign up</a> instead</p>
                    </div>
                    <div className="container content">
                        <div className="row">
                            <div className="col-sm-6 line">
                                <div style={{ width: '80%', float: 'right' }}>
                                    <div className="form-group">
                                        <input type="email" value={userName}
                                            placeholder="Enter your email..."
                                            className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            onChange={this.getValueForm}
                                            name="userName" />
                                        <input type="password"
                                            value={passWord}
                                            placeholder="Enter your password..."
                                            className="form-control mt15"
                                            id="exampleInputPassword1"
                                            onChange={this.getValueForm}
                                            name="passWord" />
                                    </div>
                                    {error && <div className="error">
                                        {error}
                                    </div>}
                                    <div style={{ flexDirection: 'row' }}>
                                        <button type="button" className="btn btn-primary" style={{ display: 'inline' }} onClick={this.onSubmit}>Login</button>
                                        <a href="/login" className="ml15">Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-primary pl15"
                                    onClick={this.handleLoginAction}>
                                    Continue with Google+
                                    </button>
                                <button type="button" className="btn btn-primary mt15 pl15"
                                    onClick={this.handleLoginAction}>
                                    Continue with Facebook
                                    </button>
                                <button type="button" className="btn btn-primary mt15 pl15"
                                    onClick={this.handleLoginAction}>
                                    Continue with Zalo
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default connect(null, { onLogin })(LoginPage)