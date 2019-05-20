import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import UsersForm from './usersForm';


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
                })
            } else {
                this.props.history.push('/login')
            }
        }
        return false
    };

    renderUser = (user) => {
        return <div key={user.token}>
            <UsersForm userName={user.userName} passwd={user.passwd} email={user.email} token={user.token} />
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

export default UsersView;