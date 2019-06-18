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

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            passwd: '',
            email: '',
            match: false
        };
    };

    handleChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
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
            password: this.state.passwd,
            email: this.state.email,
            token: Math.random().toString(36).substr(2, 25)
        };
        const {data} = await DataTransaction.register(user);
        this.setState( {
            userName: data.userName,
            passwd: data.passwd,
            token: data.token
        });
        this.props.dispatch({
            type: 'ADD_USER_SUCCESS',
            data
        });
        this.props.dispatch({
            type: 'POPULATE_PROFILE_SUCCESS',
            data
        });
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('token', data.token);
        this.props.history.push('/');
    };

    isMatched = (event) => {
        if(event.target.value === this.state.passwd) {
            this.setState({
                match: true
            })
        } else {
            this.setState({
                match: false
            })
        }

    };

    render() {
        return (
            <div>
                <form className={'form'} onSubmit={this.handleSubmit}>
                    <h1>Registation</h1><p/>
                    <h3>Login</h3>
                    <input type={'text'} autoComplete={"on"} placeholder={'Type in your Login'}
                           minLength={4}
                           onChange={this.handleChangeUserName}
                           pattern="[a-zA-Z0-9-_\.@]{1,20}$" required/>
                    <h3>E-mail</h3>
                    <input type={'email'} placeholder={'Enter your email'} onChange={this.handleChangeEmail} required />
                           <h3>Password</h3>
                    <input type={'password'} autoComplete={"on"} placeholder={'Type in your password'}
                           minLength={6}
                           onChange={this.handleChangePasswd}
                           pattern="[0-9]{1,20}$" required/>
                    <input type={'password'} autoComplete={"on"} placeholder={'Confirm your password'}
                           minLength={6}
                           onChange={this.isMatched}
                           pattern="[0-9]{1,20}$" required/><p/>
                    <input disabled={!this.state.match} type={'submit'} value={'Register'} />
                </form>
            </div>
        );
    };
}

export default connect(mapStateToProps) (SignUp);