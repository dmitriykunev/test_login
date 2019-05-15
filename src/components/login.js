import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passwd: '',
            token: ''
        };
    };

    handleChangeUserName = (event) => {
        const data = event.target.value;
        this.props.dispatch({
           type: 'ADD_LOGIN',
           data
        });
        this.setState({
            userName: event.target.value
        });
    };

    handleChangePasswd = (event) => {
        const data = event.target.value;
        this.props.dispatch({
            type: 'ADD_PASSWORD',
            data
        });
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
        this.setState( {
            userName: data.userName,
            passwd: data.passwd,
            token: data.token
        });
        this.updateLocalStorage(data);
        if(this.state.token) {
            this.props.history.push('/content')
        }
    };

    updateLocalStorage = (data) => {
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('token', data.token);
    };

    handleRedirect = (event) => {
        event.preventDefault();
        this.props.history.push('/signUp')
    };

    // handleSignUpButton = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         signUp: true
    //     });
    //     // this.props.register(true)
    // };

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
                <input type={'submit'} value={'SUBMIT'} onClick={this.handleSubmit}/>
                <a className={'h2'} href={'/signUp'} onClick={this.handleRedirect}> Register </a>
            </form>
            </div>
        );
    };
};


export default connect(mapStateToProps) (Login);