import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Checkbox, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel} from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import {getById, save, update} from '../../../actions/venta-action'
import {getList as getMesaList} from '../../../actions/mesa-action'
import {getList as getClienteList} from '../../../actions/cliente-action'
import {connect} from 'react-redux'

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            precioTotal: props.data ? props.data.precioTotal : '',
            fecha: props.data ? props.data.fecha : 'null',
            Pedido: props.data ? props.data.Pedido : '',            
            Cliente: props.data ? props.data.Cliente : '', 
    }

    componentWillMount = () => {
        this.props.getMesaList("")
        this.props.getClienteList("")
    }

    /*componentDidMount = () => {
        const {id} = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    precioTotal: data.precioTotal,
                    fecha: data.fecha,
                    Pedido: data.Pedido,
                    Cliente: data.Cliente,
                });
            });
        }
    }*/

 
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const {id} = this.props.match.params
        if (id) {
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        event.preventDefault();
    }
    render() {
        let {cliente_list, mesa_list} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>{this.state.id ? "Editar" : "Nuevo"} venta</PageHeader>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Panel>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form>
                                        <FormGroup className="col-lg-4">
                                            <ControlLabel>Mesa00</ControlLabel>
                                            <FormControl
                                                componentClass="select"
                                                placeholder="Seleccione una Mesa"
                                                value={this.state.mesa}
                                                required="required"
                                                name="mesa"
                                                onChange={this.handleChange}
                                            >
                                                <option value="" disabled>Seleccione una opcion...</option>
                                                {mesa_list.map((d, index) =>
                                                    <option key={index} value={d.id}>Piso {d.piso} - #{d.numMesa}
                                                        [Libre? {d.libre ? "Si" : "No"}]</option>
                                                )}
                                            </FormControl>
                                        </FormGroup>
                                        <FormGroup className="col-lg-3">
                                            <ControlLabel>Fecha</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.fecha}
                                                name="fecha"
                                                required="required"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup className="col-lg-5">
                                            <ControlLabel>Cliente</ControlLabel>
                                            <FormControl
                                                componentClass="select"
                                                placeholder="Seleccione un cliente"
                                                value={this.state.cliente}
                                                name="cliente"
                                                required="required"
                                                onChange={this.handleChange}
                                            >
                                                <option value="" disabled>Seleccione una opcion...</option>
                                                {cliente_list.map((d, index) =>
                                                    <option key={index}
                                                            value={d.id}>{d.nombre} {d.apePaterno} {d.apeMaterno}</option>
                                                )}
                                            </FormControl>
                                        </FormGroup>
                                        <FormGroup className="col-lg-12">
                                            <Checkbox
                                                value={this.state.finalizada}
                                                name="finalizada"
                                                onChange={this.handleChange}
                                            >
                                                ¿Finalizada? {this.state.finalizada ? "SI" : "NO"}
                                            </Checkbox>
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup className="constrols text-right">
                                            <Button type="reset"
                                                    onClick={(e) => this.props.history.push('/catalogo/ventas/list')}><i
                                                className="fa fa-undo"/> Cancelar</Button>
                                            {'  '}
                                            <Button type="submit" bsStyle="primary" onClick={this.handleSubmit}><i
                                                className="fa fa-save"/> Guardar</Button>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        )
    }

}


Form.propTypes = {
    data: PropTypes.object,
    cliente_list: PropTypes.array,
    mesa_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.venta.list.find(item => item.id + '' === props.match.params.id + ''),
            cliente_list: state.cliente.list,
            mesa_list: state.mesa.list
        }
    }
    return {
        data: null,
        cliente_list: state.cliente.list,
        mesa_list: state.mesa.list
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getMesaList,
    getClienteList,
})(Formm)