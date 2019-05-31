import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userName: this.props.userName,
    //         passwd: this.props.password,
    //         token: this.props.token,
    //         email: this.props.email
    //     };
    // }

    componentDidMount() {
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
    }

    checkStateValid = async (token) => {
        if (token) {
            const {data} = await DataTransaction.token(token);
            console.log(data);
            if (data) {
                // this.setState({
                //     userName: data.userName,
                //     passwd: data.passwd,
                //     email: data.email,
                //     token: data.token
                // });
                this.props.dispatch({
                    type: 'POPULATE_PROFILE',
                    data
                })
                // this.props.dispatch({
                //     type: 'CHANGE_PROFILE_EMAIL',
                //     data: data.email
                // });
                // this.props.dispatch({
                //     type: 'CHANGE_PROFILE_NAME',
                //     data: data.userName
                // });
                // this.props.dispatch({
                //     type: 'CHANGE_PROFILE_PASSWORD',
                //     data: data.passwd
                // });
                // this.props.dispatch({
                //     type: 'CHANGE_PROFILE_TOKEN',
                //     data: data.token
                // });
            } else {
                this.props.history.push('/login')
            }
        }
        return false
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