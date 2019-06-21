import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from "react-redux";

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

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
            anchorEl: null
        };
    }

    signOut = () => {
        localStorage.clear();
        this.props.dispatch({
            type: 'LOGOUT'
        });
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const anchorEl = this.state.anchorEl;

        return (
            <div>
                <Button variant="outlined" color="primary"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                    USER MENU
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink className="NavLink" to='/content'><i className="fa fa-fw fa-home"></i> Home</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink className="NavLink" to='/usersView'><i className="fa fa-fw fa-address-card"></i> My Profile</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink className="NavLink" to={"/usersEdit"}><i className="fa fa-fw fa-user-edit"></i> Manage Users</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink className="NavLink" to='/' onClick={this.signOut}>
                            <i className="fas fa-sign-out-alt"></i> Sign Out</NavLink>
                    </MenuItem>
                </Menu>
            </div>
    );
    }
    }
    export default connect(mapStateToProps) (NavBar);