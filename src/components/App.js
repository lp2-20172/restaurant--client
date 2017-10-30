import React, {Component} from 'react'
import compose from 'recompose/compose'
import {connect} from 'react-redux'
import AppLayout from './app/AppLayout'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'

class App extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <Router>
                <AppLayout>
                    <Route path="/login" component={Login}/>
                </AppLayout>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getList: (q) => { dispatch(getList(q)) }
    }
}

App.propTypes = {}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)