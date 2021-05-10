import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

export function Header(): JSX.Element {
    return (
        <header className="bg-black d-flex p-2 justify-content-center text-center">
            <nav className="navbar">
                <Link className="navbar-brand"
                      to="/">
                    <img src={logo}
                         alt={"Brand Logo"}/>
                </Link>
            </nav>
        </header>
    );
}
