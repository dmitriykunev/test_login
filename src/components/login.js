import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passwd: '',
            token: '',
            loggedIn: false,
            signUp: false
        };
    };

    handleChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    handleChangePasswd = (event) => {
        this.setState({
            passwd: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.passwd
        };
        const {data} = await DataTransaction.login(user);
        console.log(data);
        this.setState( {
            userName: data.userName,
            passwd: data.passwd,
            loggedIn: data.loggedIn
        });
        this.props.newState(data);
        this.updateLocalStorage(data)
    };


    updateLocalStorage = (data) => {
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('token', data.token);
        localStorage.setItem('loggedIn', data.loggedIn);
    };

    handleSignUpButton = (event) => {
        event.preventDefault();
        this.setState({
            signUp: true
        });
        this.props.register(true)
    };

    render() {
        return (
            <div>
            <form className={'form'} onSubmit={this.handleSubmit}>
                <h1>Enter your credentials</h1><p/>
                <h3>Login</h3>
                <input type={'text'} autoComplete={"on"} placeholder={'Enter your Login'} onChange={this.handleChangeUserName}
                       pattern="^[a-zA-Z][a-zA-Z0-9-_\.@]{1,20}$" />
                <h3>Password</h3>
                <input type={'password'} autoComplete={"on"} placeholder={'Enter your password'} onChange={this.handleChangePasswd}
                       pattern="[0-9]{1,20}$" /><p/>
                <input type={'submit'} value={'SUBMIT'} />
                <a className={'h2'} href={'/register'} onClick={this.handleSignUpButton}> Register </a>
            </form>
            </div>
        );
    };
};

export default Login;