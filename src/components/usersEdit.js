import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import UsersForm from './usersForm.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state
    }
};

class UsersEdit extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.state = {
            token: '',
            userName: '',
            passwd: '',
            email: '',
            usersArray: []
        };
    }

    componentDidMount() {
        this.userListGenerator()
    }

    getUsersArray = async () => {
        return await DataTransaction.getUsers();
    };

    userListGenerator = async () => {
        const { data } = await this.getUsersArray();
        console.log(data);
        if (data) {
            this.setState({
                usersArray: data
            });
        }

        this.state.usersArray.map(this.handleRedux)
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
            const newToken = localStorage.getItem('token');
            if (data) {
                this.setState({
                    token: newToken,
                    userName: data.userName,
                    passwd: data.passwd,
                    email: data.email
                })
            } else {
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

    renderUser = (user) => <div key={user.token} ><UsersForm userName={user.userName} passwd={user.passwd} email={user.email} token={user.token} /></div>


    render() {
        return (
            <div>
                <NavBar/>

                {
                    this.state.usersArray.length === 0 ? this.renderNoData() : this.state.usersArray.map(this.renderUser)
                }
            </div>
        )

    };
}

export default connect(mapStateToProps) (UsersEdit);