import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux";
import DataTransaction from "./components/data_transaction.js";

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

class TestLanding extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.state = {
            token: token
        };
    };

    checkStateValid = async (token) => {
            console.log('Quering Token...');
        const {data} = await DataTransaction.token(token);
        console.log('This is the LOG from Token query', data);
        this.props.dispatch({
            type: 'TOKEN_CHECK',
            token: data.token
        });
        return data
    };

    render() {
        // console.log('State token' + this.state.token);
        // console.log('Saga token in props' + this.props.token);
        return (
            <div>
                {
                    this.state.token
                        ? this.props.history.push('/content')
                        : this.props.history.push('/login')
                }
            </div>

        );
    }
}



export default connect(mapStateToProps) (TestLanding);
