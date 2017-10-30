import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem';
import {pageToTitle} from '../../utils/Core'

function renderNavItems(props, pages, activePage = false) {
    let navItems = null;
    if (pages && pages.length) {
        navItems = pages.reduce(reduceChildRoutes.bind(null, props, activePage), [])
    }
    return <li className="nav in" id="side-menu">{navItems}</li>
}

function reduceChildRoutes(props, activePage, items, childPage, index) {

    if (childPage.routes && childPage.routes.length > 1) {
        items.push(
            <MenuItem
                key={index}
                title={pageToTitle(childPage)}
                icon={childPage.icon}
                novisible={childPage.novisible}
            >
                {renderNavItems(props, childPage.routes, activePage)}
            </MenuItem>,
        )
    } else if (childPage.title !== false) {
        childPage =
            childPage.routes && childPage.routes.length === 1 ? childPage.routes[0] : childPage
        items.push(
            <MenuItem
                key={index}
                title={pageToTitle(childPage)}
                icon={childPage.icon}
                href={childPage.path}
                novisible={childPage.novisible}
            />,
        );
    }
    return items;
}

class Menu extends Component {
    render() {
        const {routes} = this.props
        return (
            <div>
                {renderNavItems(this.props, routes)}
            </div>
        )
    }
}

Menu.propTypes = {
    routes: PropTypes.array.isRequired,
}

export default Menu