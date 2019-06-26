import React, {Component} from 'react';
import '../index.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state
};

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

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
            password: this.props.password,
            token: this.props.token,
            email: this.props.email,
            info: this.props.info,
            error: this.props.error
        };
    }


    handleChangeUserName = event => {
        this.setState({
            userName: event.target.value,
        });
    };

    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
    };

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
    };

    handleChangeInfo = event => {
        this.setState({
            info: event.target.value,
        });
    };

    handleSaveUser = () => {
        const data = {
            userName: this.state.userName,
            token: this.props.token,
            password: this.state.password,
            email: this.state.email,
            info: this.state.info };
        this.props.dispatch({
            type: 'CHANGE_USER',
            data
        });
    };

    handleRemoveUser = () => {
        const data = {
            userName: this.state.userName,
            token: this.props.token,
            password: this.state.password,
            email: this.state.email,
            info: this.state.info };
        this.props.dispatch({
            type: 'REMOVE_USER',
            data
        });

    };

    render() {
        const {classes} = this.props;

        return (
            <div>
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
                            value={this.state.password}
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
                        <TextField
                            id="outlined-name"
                            label="Personal Info"
                            className={classes.textField}
                            value={this.state.info}
                            onChange={this.handleChangeInfo}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleSaveUser}>
                            Save
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleRemoveUser}>
                            Remove
                        </Button>
                    </form>
                    <br />
                </div>

            </div>

        )
    };
}

export default withStyles(styles)(connect(mapStateToProps) (UsersForm));