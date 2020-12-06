import React, { Component } from 'react';
import "./styles.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/x">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/c">Home</a></li>
                        <li><a href="/a">Page 1</a></li>
                        <li><a href="/b">Page 2</a></li>
                        <li><a href="/v">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;