import React from "react";
import { Link } from "react-router-dom";



export default function Navbar(props) {



    return(
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" to="/">
                            More
                        </Link>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="/">
                                About
                            </Link>
                            <Link className="navbar-item" to="/">
                                Contact
                            </Link>
                            <hr className="navbar-divider" />
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-primary" to="/">
                                <strong>Sign up</strong>
                            </Link>
                            <Link className="button is-light" to="/">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
