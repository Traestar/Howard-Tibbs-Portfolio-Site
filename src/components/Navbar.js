import React from 'react';
//import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Image } from 'semantic-ui-react';

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

/* 
    Navbar options
    secondary
    fixed
    top
    inverted
    size

*/


const Navbar = () => (
    <navbar className="navbar ui top borderless fixed inverted compact huge menu">
        <div className="item">
            <Link className="logo" smooth to="#/" activeClassName="is-active" exact={true}><Image className="tiny" src='images\HLTLogov1_Final.png' wrapped /></Link>
        </div>
        <div class="right menu">  
            <Link className="item" smooth to="#About" activeClassName="selected" exact={true}>About</Link>
            <Link className="item" smooth to="#Experience" activeClassName="selected" exact={true}>Experience</Link>
            <Link className="item" smooth to="#Projects" activeClassName="selected" exact={true}>Projects</Link>
            <Link className="item" smooth to="#Contact" activeClassName="selected" exact={true}>Contact</Link>
        </div> 
    </navbar>
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

export default Navbar;