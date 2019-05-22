import React, { Component } from 'react';
import DataTransaction from "./components/data_transaction.js";
import { Redirect } from 'react-router-dom';
import './index.css';

class TestLanding extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.state = {
            userName: '',
            passwd: '',
            token: token
        };

    }

    checkStateValid = async (token) => {
        if(token) {
            const {data} = await DataTransaction.token(token);
            // console.log(this.state);
            if(data) {
                this.setState({
                    token: data.token,
                    userName: data.userName
                })
            } else {
                return false
            }
        } return false
    };

    render() {
        return (
            <div>
                {
                    this.state.token
                        ? <Redirect to='/content' />
                        : <Redirect to='/login' />
                }
            </div>

        );
    }
}



export default TestLanding;
