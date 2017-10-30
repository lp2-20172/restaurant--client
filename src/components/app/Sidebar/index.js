import React, {Component} from 'react';
import AppMenu from '../AppMenu'

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-default sidebar" style={{marginLeft: '-20px'}} role="navigation">
                <div className="sidebar-nav navbar-collapse collapse">
                    <AppMenu>
                        Loading...
                    </AppMenu>
                </div>
            </div>
        );
    }
}

export default Sidebar;
