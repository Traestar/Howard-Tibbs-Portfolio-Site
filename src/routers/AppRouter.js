import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
//import ContactPage from '../components/ContactPage';
//import EditPortfolio from '../components/EditPortfolio';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
//import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Navbar />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            {/*
            <Route path="/portfolio/:id" component={EditPortfolio} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
            */}
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;