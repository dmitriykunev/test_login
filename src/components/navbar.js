import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.name,
            loggedIn: this.props.loggedIn,
            anchorEl: null
        };
    }

    signOut = () => {
        this.setState({
            loggedIn: false
        });
        localStorage.clear();
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
            <div className={'menu'}>
                <Button aria-owns={anchorEl ? 'simple-menu' : undefined}
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
                        <NavLink to='/content'><i className="fa fa-fw fa-home"></i> Home</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink to='/usersView'><i className="fa fa-fw fa-user"></i> USER</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink to='/usersView'><i className="fa fa-fw fa-user"></i> Users' List</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink to={"/usersEdit"}><i className="fa fa-fw fa-user"></i> Manage Users</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink to={"/usersRemove"}><i className="fa fa-fw fa-user"></i> Remove Users</NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <NavLink to='/' onClick={this.signOut}>
                            <i className="fas fa-sign-out-alt"></i> Sign Out</NavLink>
                    </MenuItem>
                </Menu>
            </div>
    );
    }
    }

    export default NavBar;