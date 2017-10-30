import React from 'react'
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {RouteWithSubRoutes} from '../utils/Routes'
import StatWidget from '../utils/Widget'

const Content = ({routes}) => (
    <div>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
        ))}
    </div>
)

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>Dashboard</PageHeader>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <StatWidget
                            style="panel-primary"
                            icon="fa fa-comments fa-5x"
                            count="26"
                            headerText="dewdewdewdwe!"
                            footerText="View Details"
                            linkTo="/"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <StatWidget
                            style="panel-green"
                            icon="fa fa-tasks fa-5x"
                            count="12"
                            headerText="New Tasks!"
                            footerText="View Details"
                            linkTo="/"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <StatWidget
                            style="panel-yellow"
                            icon="fa fa-shopping-cart fa-5x"
                            count="124"
                            headerText="New Orders!"
                            footerText="View Details"
                            linkTo="/"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <StatWidget
                            style="panel-red"
                            icon="fa fa-support fa-5x"
                            count="13"
                            headerText="Support Tickets!"
                            footerText="View Details"
                            linkTo="/"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export {Content, Home}