import React, { Component } from 'react';
import "./styles.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/abc">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/abc">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/abc">Page 1
                  <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="/abc">Page 1-1</a></li>
                                <li><a href="/abc">Page 1-2</a></li>
                                <li><a href="/abc">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="/abc">Page 2</a></li>
                        <li><a href="/abc">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;