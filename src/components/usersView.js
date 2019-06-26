import React, {Component, Fragment} from 'react';
import '../index.css';
import NavBar from "./navbar";
import UserForm from './userForm';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        userName: state.profileReducer.userName,
        password: state.profileReducer.password,
        token: state.profileReducer.token,
        email: state.profileReducer.email,
        info: state.profileReducer.info,
        error: state.profileReducer.error
    }
};


class UsersView extends Component {

    componentWillMount() {
        const token = localStorage.getItem('token');
        this.props.dispatch({
            type: 'TOKEN_CHECK',
            token: token
        });
    };


    renderUser = (user) => {
        return <div key={user.token}>
            <UserForm
                userName={this.props.userName}
                passwd={this.props.password}
                email={this.props.email}
                token={this.props.token}
                info={this.props.info}
            />
        </div>
    };

    render() {
        if (!this.props.token) {
            this.props.history.push('/login')
        }
        return (
            <Fragment>
                <div className={"navbar"}>
                    <NavBar/>
                </div>
                <div>
                    {
                        this.renderUser(this.props)
                    }
                </div>
            </Fragment>

        )
    };
}

export default connect(mapStateToProps)(UsersView);