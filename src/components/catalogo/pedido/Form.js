import React, {Component} from 'react'
import {Button, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel} from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import {getById, save, update} from '../../../actions/pedido-action'
import {getList as getMesaList} from '../../../actions/mesa-action'
import {getList as getClienteList} from '../../../actions/cliente-action'
import {getList as getMenuList} from '../../../actions/menu-action'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Image from 'react-bootstrap/lib/Image'

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            confirmado: props.data ? props.data.confirmado : '',
            servido: props.data ? props.data.servido : '',
            fecha: props.data ? props.data.fecha : '',
            menu: props.data ? props.data.menu : '',
            mesa: props.data ? props.data.mesa : '',
            precio: props.data ? props.data.precio : '',
            cliente: props.data ? props.data.cliente : false,
        }
    }

    componentWillMount = () => {
        this.props.getMesaList("")
        this.props.getClienteList("")
        this.props.getMenuList("")
    }

    /*componentDidMount = () => {
        const {id} = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
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
        let {cliente_list, mesa_list, menu_list} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>{this.state.id ? "Editar" : "Nuevo"} pedido</PageHeader>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Panel>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form>
                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Confirmado</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Text"
                                                name="confirmado"
                                                value={this.state.confirmado}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Servido</ControlLabel>
                                            <FormControl
                                                type="text"
                                                name="servido"
                                                value={this.state.servido}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Fecha</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.fecha}
                                                name="fecha"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup className="col-lg-4">
                                            <ControlLabel>Mesa</ControlLabel>
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
                                        <FormGroup className="col-lg-4">
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
                                        <FormGroup className="col-lg-4">
                                            <ControlLabel>Menu</ControlLabel>
                                            <FormControl
                                                componentClass="select"
                                                placeholder="Seleccione un menu"
                                                value={this.state.menu}
                                                name="menu"
                                                required="required"
                                                onChange={this.handleChange}
                                            >
                                                <option value="" disabled>Seleccione una opcion...</option>
                                                {menu_list.map((d, index) =>
                                                    <option key={index}
                                                            value={d.id}>{d.nombre} S/. {d.precio} <Image src={d.imagen}
                                                                                                          responsive
                                                                                                          style={{
                                                                                                              width: 'auto',
                                                                                                              height: 100
                                                                                                          }}/></option>
                                                )}
                                            </FormControl>
                                        </FormGroup>
                                        <FormGroup className="constrols text-right">
                                            <Button type="reset"
                                                    onClick={(e) => this.props.history.push('/catalogo/productos/list')}><i
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
    mesa_list: PropTypes.array,
    menu_list: PropTypes.array,
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.pedido.list.find(item => item.id + '' === props.match.params.id + ''),
            cliente_list: state.cliente.list,
            mesa_list: state.mesa.list,
            menu_list: state.menu.list,
        }
    }
    return {
        data: null,
        cliente_list: state.cliente.list,
        mesa_list: state.mesa.list,
        menu_list: state.menu.list,
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getMesaList,
    getClienteList,
    getMenuList
})(Formm)