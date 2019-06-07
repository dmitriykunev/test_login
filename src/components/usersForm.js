import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import MaterialTable from 'material-table';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state
    }
};

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
            passwd: this.props.passwd,
            token: this.props.token,
            email: this.props.email
        };
    }


handleChangeUserName = event => {
    this.setState({
        userName: event.target.value,
    });
};

handleChangePassword = event => {
    this.setState({
        passwd: event.target.value,
    });
};

handleChangeEmail = event => {
    this.setState({
        email: event.target.value,
    });
};

handleRemove = () => {
        const data = this.state;
        // await DataTransaction.remove(data);
        this.props.dispatch({
            type: 'REMOVE_USER',
            data
        });
    };

handleSaveUser = async () => {
    const data = this.state;
    await DataTransaction.modify(data);
    this.props.dispatch({
        type: 'MODIFY_USER',
        data
    });
};

render() {
    const {classes} = this.props;

    return (
        <div>
            NO DATA SO FAR
        </div>

    )
};
}

export default withStyles(styles)(connect(mapStateToProps) (UsersForm));