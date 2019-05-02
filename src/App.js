import React, { Component, Fragment } from 'react';
import DataTransaction from "./components/data_transaction.js";
import NavBar from './components/navbar.js';
import Login from './components/login.js';
import Content from './components/content';
import SignUp from './components/signUp';
import './index.css';

class TestLanding extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.state = {
            userName: '',
            passwd: '',
            token: token,
            loggedIn: false,
            signUp: false
        };

    }

    checkStateValid = async (token) => {
        if(token) {
            const {data} = await DataTransaction.token(token);
            console.log(data);
            if(data) {
                this.setState({
                    token: data.token,
                    userName: data.userName,
                    loggedIn: data.loggedIn
                })
            } else {
                return false
            }
        } return false
    };

    handleLoggedIn = (newState) => {
        console.log(newState);
        this.setState({
            userName: newState.userName,
            passwd: newState.passwd,
            loggedIn: newState.loggedIn,
            token: newState.token
        });
        console.log(this.state.loggedIn);
        localStorage.setItem('token', this.state.token);
    };

    handleSignUP = (register) => {
        this.setState({
            signUp: register
        })
    };

    render() {

        return (
            <div>
                {
                    this.state.loggedIn && this.state.token
                    ? <Fragment><NavBar name={this.state.userName} loggedIn={this.state.loggedIn}/><br /><Content /></Fragment>
                    : this.state.signUp
                        ? <SignUp newState={this.handleLoggedIn} />
                        : <Login newState={this.handleLoggedIn} register={this.handleSignUP}/>
                }
            </div>

        );
    }
}

export default TestLanding;
