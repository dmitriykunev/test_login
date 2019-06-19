import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        userName: state.profileReducer.userName,
        passwd: state.profileReducer.password,
        token: state.profileReducer.token,
        email: state.profileReducer.email,
        info: state.profileReducer.info,
        error: state.profileReducer.error
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
        this.setState( {
            userName: data.userName,
            passwd: data.passwd,
            token: data.token
        });
        if(data) {
            console.log(data);
            this.props.dispatch({
                type: 'POPULATE_PROFILE_SUCCESS',
                data
            });
        } else {
            this.props.dispatch({
                type: 'POPULATE_PROFILE_FAIL'
            });
        }
        this.updateLocalStorage(data);
        if(this.state.token) {
            this.props.history.push('/content')
        }
    };

    updateLocalStorage = (data) => {
        data =
        // localStorage.setItem('userName', data.userName);
        localStorage.setItem('token', data.token);
    };


    handleRedirect = (event) => {
        event.preventDefault();
        this.props.history.push('/signUp')
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
                <input type={'submit'} value={'SUBMIT'} onClick={this.handleSubmit}/>
                <a className={'h2'} href={'/signUp'} onClick={this.handleRedirect}> Register </a>
            </form>
            </div>
        );
    };
};

export default connect(mapStateToProps) (Login);