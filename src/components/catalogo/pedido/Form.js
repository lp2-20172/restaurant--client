import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel} from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import {getById, save, update} from '../../../actions/pedido-action'
import {getList as getClienteList} from '../../../actions/cliente-action'
import {connect} from 'react-redux'

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            confirmado: props.data ? props.data.confirmado : '',
            servido: props.data ? props.data.servido : '',
            fecha: props.data ? props.data.fecha : '',
            menu: props.data ? props.data.menu : '',
            precio: props.data ? props.data.precio : '',
            cliente: props.data ? props.data.cliente : false,
        }
    }

    componentWillMount = () => {
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
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Menu</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.menu}
                                                name="menu"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Cliente</ControlLabel>
                                            <FormControl
                                                type="number"
                                                value={this.state.cliente}
                                                name="cliente"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Mesa</ControlLabel>
                                            <FormControl
                                                type="number"
                                                value={this.state.mesa}
                                                name="mesa"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
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
    data: PropTypes.object
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.pedido.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update
})(Formm)