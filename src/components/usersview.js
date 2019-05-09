import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";

class UsersView extends Component {

    handleList = async () => {
        let data = await DataTransaction.getUsers;
        console.log(data);
    };

    render() {
        return (
            <div>
                <NavBar />
                <div><p>YOU HAVE BEEN REDIRECTED TO VIEW Mother Fucker!</p></div>

            </div>

        )};
}

export default UsersView;