import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {del, getList} from '../../../actions/venta-action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Table from 'react-bootstrap/lib/Table'


class List extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/ventas/new');
    }

    render() {
        let {list, del} = this.props
        if (list) {

        } else {
            list = []
        }
        return (
            <div>
                <div className="col-lg-12">
                    <PageHeader>Lista de ventas
                        <Button bsStyle="success" onClick={this.handleClick}><i className="fa fa-plus"/></Button>
                    </PageHeader>
                </div>
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Total</th>
                                <th className="text-center">Fecha</th>
                                <th className="text-center">Pedido</th>
                                <th className="text-center">Cliente</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list.map((d, index) =>
                                <tr key={index}>
                                    <td className="text-center">{index + 1} </td>
                                    <td className="text-center">{d.precioTotal}</td>
                                    <td className="text-center">{d.fecha}</td>
                                    <td className="text-center">{d.Pedido}</td>                                    
                                    <td className="text-center">{d.Cliente}</td>
                                        <Link to={`/catalogo/venta/edit/${d.id}`} className="btn btn-info btn-sm"
                                              role="button"><i className="fa fa-edit"/></Link> {" "}
                                        <Button bsSize="small" bsStyle="danger"
                                                onClick={() => del(d.id, this.props.history)}><i
                                            className="fa fa-trash"/></Button>                                    
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

List.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        list: state.venta.list
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}
*/
export default connect(mapStateToProps, {
    getList,
    del
})(List)