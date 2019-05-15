import SignUp from "./components/signUp";
import Login from "./components/login";
import Content from "./components/content";
import UsersView from "./components/usersView";
import UsersEdit from "./components/usersEdit";
import UsersRemove from "./components/usersRemove";
import TestLanding from "./App.js";
import NoMatch from "./components/noMatch";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
return (
<Router>
    <div>
        {/*<TestLanding />*/}

        <Switch>
            <Route exact path='/' component={TestLanding} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/content" component={Content} />
            <Route path="/usersView" component={UsersView} />
            <Route path="/usersEdit" component={UsersEdit} />
            <Route path="/usersRemove" component={UsersRemove} />
            <Route component={NoMatch} />
        </Switch>
    </div>
</Router>
)};

export default AppRouter;