import React from 'react';
import {MenuItem, NavDropdown,} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import $ from "jquery";
import Sidebar from '../Sidebar/index';

const logo = require('../../../logo.svg');

function Header(props) {
    return (
        <div id="wrapper" className="content">
            <Navbar fluid={true} style={{margin: 0}}>
                <Brand>
            <span>
              <img src={logo} alt="Restaurant Admin" title="Restaurant Admin"/>
              <span>&nbsp;Restaurant Admin</span>
                <button type="button" className="navbar-toggle" onClick={() => {
                    toggleMenu();
                }} style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </span>
                </Brand>
                <ul className="nav navbar-top-links navbar-right">
                    <NavDropdown title={<i className="fa fa-user fa-fw"></i>} id='navDropdown4'>
                        <MenuItem eventKey="1">
                            <span> <i className="fa fa-user fa-fw"></i> Perfil de usuario</span>
                        </MenuItem>
                        <MenuItem eventKey="2">
                            <span><i className="fa fa-gear fa-fw"></i> Opciones </span>
                        </MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="3" onClick={props.isLoggedIn ? props.logout : props.login}>
                            <span> <i className="fa fa-sign-out fa-fw"/>{props.isLoggedIn ? 'Logout' : 'Login'}</span>
                        </MenuItem>
                    </NavDropdown>
                </ul>
                <Sidebar/>
            </Navbar>
        </div>
    );
}

function toggleMenu() {
    if ($(".navbar-collapse").hasClass('collapse')) {
        $(".navbar-collapse").removeClass('collapse');
    }
    else {
        $(".navbar-collapse").addClass('collapse');
    }
}

export default Header;
