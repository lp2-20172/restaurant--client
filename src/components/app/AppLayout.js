import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import {Route, withRouter} from 'react-router-dom'
import {findActiveNodeRoute, RouteWithSubRoutes} from '../utils/Routes'
import {routes, routese} from '../routes'
import {connect} from 'react-redux'

import {toggleTheme} from '../../actions'

import {login, logout} from '../utils/OAuth2'
import config from '../../conn'
import Header from './Header'
import {getLocalUserInfo} from '../../actions/auth-action'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
// TODO: quitar esto y eliminar material del proyecto
import {withStyles} from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'

class RouteConfigExample extends React.Component {
    constructor(props) {
        super(props);
        let user = null
        if (localStorage.getItem('user') !== "undefined") {
            user = JSON.parse(localStorage.getItem('user'))
        }
        this.state = {
            username: user ? user.username : null
        }

    }

    componentWillMount() {
        //NProgress.start()
    }

    componentDidMount() {
        //NProgress.done()
    }


    handleDrawerOpen = () => {
        //console.log("main.handleDrawerOpen.open:"+this.state.open)
    }

    handleDrawerClose = () => {
        //console.log("main.handleDrawerClose.close:"+this.state.open)
    }

    handleToggleShade = (event) => {
        this.props.toggleTheme()
        //this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' });
    }

    lLogin = (event) => {
        this.props.login(config).then(result => {
            console.log('token: ' + JSON.stringify(result.token))
            console.log('expiresAt: ' + JSON.stringify(result.expiresAt))
            localStorage.setItem('userToken', result.token)

            this.props.getLocalUserInfo().then(data => {
                //console.log('user: ' + JSON.stringify(data))
                localStorage.setItem('user', JSON.stringify(data))
                if (data) {
                    this.setState({
                        username: data.username
                    })
                }
            })
        }, function (e) {
            console.log(e); // TypeError: Throwing
        })
    }

    lLogout = (event) => {
        console.log('logout2')
        this.props.logout().then(result => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('user')
            this.setState({
                username: null
            })
        })
    }

    render() {
        const {classes, location, isLoggedIn} = this.props
        const {title} = findActiveNodeRoute(routes, location)
        return (
            <div className={classes.root}>
                <Header isLoggedIn={isLoggedIn} logout={this.lLogout} login={this.lLogin}/>
                <div id="page-wrapper" className="page-wrapper">
                    <div className={classes.appFrame}>
                        <title>
                            {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
                            - EComm Sys
                        </title>
                        {title.parent ?
                            <Breadcrumb><Breadcrumb.Item href="#">{title.parent}</Breadcrumb.Item><Breadcrumb.Item
                                active>{title.children}</Breadcrumb.Item></Breadcrumb> :
                            <Breadcrumb><Breadcrumb.Item active>{title.children}</Breadcrumb.Item></Breadcrumb>}
                        <main>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
                            ))}
                            {routese.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

RouteConfigExample.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth}) => ({
    isLoggedIn: auth.isLoggedIn
})

export default compose(
    withRouter,
    withStyles(null),
    withWidth(),
    connect(mapStateToProps, {
        login,
        logout,
        getLocalUserInfo,
        toggleTheme
    })
)(RouteConfigExample)