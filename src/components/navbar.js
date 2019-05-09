import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter,Switch } from "react-router-dom";
import UsersView from './usersview.js';
// import UsersEdit from './usersedit.js';
// import UsersRemove from './usersremove.js';

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
        <BrowserRouter>
        <div className={'navbar'}>
            <a className="active" href='/'><i className="fa fa-fw fa-home"></i> Home</a>
            <div className={'navbar-right-edge'}>
                    <b><i className="fa fa-fw fa-user"></i> {this.state.userName}</b>

                        <NavLink to='/usersView'><i className="fa fa-fw fa-user"></i> Users' List</NavLink>
                        {/*<Link to={"/usersEdit"}><i className="fa fa-fw fa-user"></i> Manage Users</Link>*/}
                        {/*<Link to={"/usersRemove"}><i className="fa fa-fw fa-user"></i> Remove Users</Link>*/}

                {/*<a onClick={this.signOut} href='/'><i className="fas fa-sign-out-alt"></i> Sign Out</a>*/}
            </div>
            <Switch>
            <Route path="/usersView" component={UsersView} />
            {/*<Route path="/usersEdit" exact component={UsersEdit} />*/}
            {/*<Route path="/usersRemove" exact component={UsersRemove} />*/}
            </Switch>
        </div>
        </BrowserRouter>
    )
    }
}

export default NavBar;