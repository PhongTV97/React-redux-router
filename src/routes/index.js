import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import DemoPage from '../pages/DemoPage';

const Routes = () => {
    return (
        <Router>
            <Route path="/" exact component={LoginPage} />
            <Route path="/not-found" component={NotFoundPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/demo" component={DemoPage} />
        </Router>)
}

export default Routes;