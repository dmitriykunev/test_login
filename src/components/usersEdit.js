import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import UsersForm from './usersForm.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        userName: state.profileReducer.userName,
        passwd: state.profileReducer.password,
        token: state.profileReducer.token,
        email: state.profileReducer.email,
        usersArray: state.usersReducer
    }
};

class UsersEdit extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.userListGenerator()
    }

    getUsersArray = async () => {
        return await DataTransaction.getUsers();
    };

    userListGenerator = async () => {
        const { data } = await this.getUsersArray();
        if (data) {
            console.log(data);
            data.map(this.handleRedux)
        }
    };

    handleRedux = (user) => {
        this.props.dispatch({
            type: 'POPULATE_USERS',
            data: user
        })
    };

    checkStateValid = async (token) => {
        if (token) {
            const {data} = await DataTransaction.token(token);
            if (!data) {
                this.props.history.push('/login')
            }
        }
        return false
    };

    renderNoData = () => (
        <div>
            <p> Data is not available</p>
        </div>
    );

    renderUser = (user) => <div key={user.token} ><UsersForm
        userName={user.userName}
        passwd={user.passwd}
        email={user.email}
        token={user.token}
    /></div>


    render() {
        return (
            <div>
                <NavBar/>

                {
                    this.props.usersArray.length === 0 ? this.renderNoData() : this.props.usersArray.map(this.renderUser)
                }
            </div>
        )

    };
}

export default connect(mapStateToProps) (UsersEdit);