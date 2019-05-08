import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";

class UsersView extends Component {
    const [data] = await DataTransaction.getUsers;
    console.log(data);

    render() {
        return (
            <div>
                <NavBar />

            </div>

        )};
}

export default UsersView;