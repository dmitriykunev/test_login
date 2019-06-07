import React, {Component} from 'react';
import '../index.css';
import NavBar from "./navbar";
import UserForm from './userForm';
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


class UsersView extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push('/login')
        }
    };


    renderUser = (user) => {
        return <div key={user.token}>
            <UserForm
                userName={this.props.userName}
                passwd={this.props.passwd}
                email={this.props.email}
                token={this.props.token}
            />
        </div>
    };

    render() {
        return (
            <div>
                <NavBar/>
                {
                this.renderUser(this.props)
                }
            </div>

        )
    };
}

export default connect(mapStateToProps) (UsersView);