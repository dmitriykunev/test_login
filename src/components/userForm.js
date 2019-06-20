import React, {Component} from 'react';
import '../index.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
            passwd: this.props.passwd,
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
            passwd: event.target.value,
        });
    };

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value,
        });
    };

    handleSaveUser = () => {
        const data = {
            userName: this.state.userName,
            token: this.props.token,
            passwd: this.state.passwd,
            email: this.state.email,
            info: this.state.info };
        this.props.dispatch({
            type: 'CHANGE_PROFILE',
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
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleSaveUser}>
                            Save
                        </Button>
                    </form>
                    <br />
                </div>

            </div>

        )
    };
}

export default withStyles(styles)(connect(mapStateToProps) (UserForm));