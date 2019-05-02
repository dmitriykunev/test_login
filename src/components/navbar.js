import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //userName: this.props.name
            userName: this.props.name,
            loggedIn: this.props.loggedIn
        };
    }

    signOut = () => {
        this.setState({
            loggedIn: false
            });
        localStorage.clear();
    };

    render () {
    return (
        <Router>
        <div className={'navbar'}>
            <a className="active" href='/'><i className="fa fa-fw fa-home"></i> Home</a>
            <div className={'navbar-right-edge'}>
                    <a href='/'><i className="fa fa-fw fa-user"></i> {this.state.userName}</a>

                        <Link to={"/usersView"}><i className="fa fa-fw fa-user"></i> Users' List</Link>
                        <Link to={"/usersEdit"}><i className="fa fa-fw fa-user"></i> Manage Users</Link>
                        <Link to={"/usersRemove"}><i className="fa fa-fw fa-user"></i> Remove Users</Link>

                <a onClick={this.signOut} href='/'><i className="fas fa-sign-out-alt"></i> Sign Out</a>
            </div>

            <Route path="/usersView" exact component={'./components/usersView.js'} />
            <Route path="/usersEdit" exact component={'./components/usersEdit.js'} />
            <Route path="/usersRemove" exact component={'./components/usersRemove.js'} />
        </div>
        </Router>
    )
    }
}

export default NavBar;