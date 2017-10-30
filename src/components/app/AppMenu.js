import React, {Component} from 'react'
import Menu from '../utils/DMenu'
import {routes} from '../routes'

class AppMenu extends Component {
    render() {
        return (
            <Menu routes={routes}>
                Loading...
            </Menu>
        )
    }
}

export default AppMenu