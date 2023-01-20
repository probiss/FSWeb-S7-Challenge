import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { HomePage } from "../sayfalar/HomePage";
import { Pizza } from "../sayfalar/Pizza";
import { Contact } from "../sayfalar/Contact";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/pizza">
                    <Pizza />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
};