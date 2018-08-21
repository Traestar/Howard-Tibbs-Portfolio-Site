import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>This is from my Portfolio Items</h1>
        <p>Checkout the stuff I've Done:</p>
        <Link to="/portfolio/123">ItemOne</Link>
        <Link to="/portfolio/145">ItemTwo</Link>
    </div>
);

export default PortfolioPage;