import React from 'react';
//import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// Create Portfolio Site
// Create Portfolio/My Work page with links to two items
// Create Contact Page
// Create Edit Portfolio Page
// Portfolio Router
// 
/* Show header/nav bar on all pages including 404 page
    /                   -> Home page (in nav)
    /portfolio          -> Portfolio home page with links to items (in nav)
    /portfolio/123      -> Individual portfolio item page that shows in ID
    /contact            -> Contact page (in nav)



*/


const Header = () => (
    <header>
        <Link to="/" activeClassName="is-active" exact={true}>Home</Link>
        <Link smooth to="/#About" activeClassName="selected" exact={true}>About</Link>
        <Link to="#Experience" activeClassName="selected" exact={true}>Experience</Link>
        <Link to="#Projects" activeClassName="selected" exact={true}>Projects</Link>
        <Link to="#Contact" activeClassName="selected" exact={true}>Contact</Link>
        {/* <Link to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</Link>
            <Link to="/contact" activeClassName="is-active" exact={true}>Contact</Link> */}
    </header>
    
);

{/*
   Home
   About
   Experience
   Education
   Skills
   Projects
   Contact

*/}

export default Header;