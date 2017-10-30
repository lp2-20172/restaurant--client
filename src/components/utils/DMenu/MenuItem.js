// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom'
import classNames from 'classnames';

class MenuItem extends React.Component<any, any> {
    state = {
        open: false,
    };

    render() {
        const {children, href, title, icon, novisible} = this.props;
        if (href) {
            if (novisible) {
                return (
                    <Route exact path={href}/>
                )
            } else {
                return (
                    <Route path={href}
                           children={({match, location}) => (
                               <li>
                                   <Link to={href}><i
                                       className={icon}/> &nbsp;{title}</Link>
                               </li>
                           )}/>
                )
            }
        }
        return (
            <li className={classNames({active: !this.state.open})}>
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    this.setState({open: !this.state.open});
                    return false;
                }}>
                    <i className={icon}/> &nbsp;{title}
                    <span className="fa arrow"/>
                </a>
                <ul className={
                    classNames({
                        'nav nav-second-level': true,
                        collapse: this.state.open
                    })
                }>
                    {children}
                </ul>
            </li>
        );
    }
}

MenuItem.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool,
};

export default MenuItem;
