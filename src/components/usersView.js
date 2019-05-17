import React, {Component} from 'react';
import '../index.css';
import DataTransaction from "./data_transaction.js";
import NavBar from "./navbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class UsersView extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        this.checkStateValid({"token": token});
        this.state = {
            userName: '',
            passwd: '',
            token: token,
            email: ''
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

    handleSave = async () => {
        const data = this.state;
        await DataTransaction.modify(data);
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

    render() {
        const {classes} = this.props;
        return (
            <div>
                <NavBar/>
                <div>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.userName}
                            onChange={this.handleChangeUserName}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Password"
                            className={classes.textField}
                            value={this.state.passwd}
                            onChange={this.handleChangePassword}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="E-mail"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleSave}>
                            Save
                        </Button>
                    </form>
                </div>

            </div>

        )
    };
}

export default withStyles(styles)(UsersView);