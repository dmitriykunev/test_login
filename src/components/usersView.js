import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import UserForm from './userForm';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        state: state
    }
};


class UsersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passwd: '',
            token: '',
            email: ''
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
    }

    checkStateValid = async (token) => {
        if (token) {
            const {data} = await DataTransaction.token(token);
            console.log(data);
            if (data) {
                this.setState({
                    userName: data.userName,
                    passwd: data.passwd,
                    email: data.email,
                    token: data.token
                });
                this.props.dispatch({
                    type: 'CHANGE_PROFILE_EMAIL',
                    data: this.state.email
                });
                this.props.dispatch({
                    type: 'CHANGE_PROFILE_NAME',
                    data: this.state.userName
                });
                this.props.dispatch({
                    type: 'CHANGE_PROFILE_PASSWORD',
                    data: this.state.passwd
                });
                this.props.dispatch({
                    type: 'CHANGE_PROFILE_TOKEN',
                    data: this.state.token
                });
            } else {
                this.props.history.push('/login')
            }
        }
        return false
    };

    renderUser = (user) => {
        return <div key={user.token}>
            <UserForm userName={user.userName} passwd={user.passwd} email={user.email} token={user.token} />
        </div>
    };

    render() {
        return (
            <div>
                <NavBar/>
                {
                this.renderUser(this.state)
                }
            </div>

        )
    };
}

export default connect(mapStateToProps) (UsersView);