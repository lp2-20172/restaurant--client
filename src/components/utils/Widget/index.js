import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class StatWidget extends Component { // eslint-disable-line
    static propTypes = {
        style: React.PropTypes.string,
        count: React.PropTypes.string,
        headerText: React.PropTypes.string,
        icon: React.PropTypes.string,
        footerText: React.PropTypes.string,
    };

    render() {
        return (
            <Panel
                className={this.props.style + " stat"}
                header={<div className="row">
                    <div className="col-xs-3">
                        <i className={this.props.icon}/>
                    </div>
                    <div className="col-xs-9 text-right">
                        <div className="huge">
                            {
                                this.props.count
                            }
                        </div>
                        <div>
                            {
                                this.props.headerText
                            }
                        </div>
                    </div>
                </div>}

                footer={
                    <Link to={this.props.linkTo}>
                        <span className="pull-left">{this.props.footerText}</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right"/></span>
                        <div className="clearfix"/>
                    </Link>}
            />
        );
    }
}

export default StatWidget;
