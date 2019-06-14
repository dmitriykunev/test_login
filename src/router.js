import SignUp from "./components/signUp";
import Login from "./components/login";
import Content from "./components/content";
import UsersView from "./components/usersView";
import UsersEdit from "./components/usersEdit";
// import Editable from "./components/usersEditNew";
import TestLanding from "./App.js";
import NoMatch from "./components/noMatch";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
return (
<Router>
    <div>
        <Switch>
            <Route exact path='/' component={TestLanding} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/content" component={Content} />
            <Route path="/usersView" component={UsersView} />
            <Route path="/usersEdit" component={UsersEdit} />
            {/*<Route path="/usersEditNew" component={Editable} />*/}
            <Route component={NoMatch} />
        </Switch>
    </div>
</Router>
)};

export default AppRouter;