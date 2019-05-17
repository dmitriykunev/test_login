import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import UsersForm from './usersForm.js';


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

    getUsersArray = async() => {
        return await DataTransaction.getUsers;
    };

    userListGenerator = () => {
        const data = this.getUsersArray();
        if(data) {
        this.setState({
            usersArray: data
        });
            return true }
                else {
                      return false
        }
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

    handlePage = (array) => {
        if(array) {
            array.forEach(function(object) {
                return object;
            })
        } else {
            return (
                <div>
                    <p> Data is not available</p>
                </div>
            )
        }
    };

    screenList = () => {
            const screenData = this.state.usersArray.map(function(elem) {
                return (
                        <div>
                            <UsersForm userName={elem.userName} passwd={elem.passwd} email={elem.email} />
                        </div>
                )
            });
        this.handlePage(screenData);
    };

    render() {
        const screen = this.screenList;
        return (
            <div>
                <NavBar />
                {console.log(screen)}
            {/*{screen}*/}
            </div>
        )

    };
}

export default UsersEdit;