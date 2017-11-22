import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel} from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import {getById, save, update} from '../../../actions/cliente-action'
import {connect} from 'react-redux'

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            codigo: props.data ? props.data.codigo : '',
            nombre: props.data ? props.data.nombre : '',
            apePaterno: props.data ? props.data.apePaterno : '',
            apeMaterno: props.data ? props.data.apeMaterno : '',
            email: props.data ? props.data.email : '',
            telefono: props.data ? props.data.telefono : '',
        }
    }

    componentWillMount = () => {
    }

    componentDidMount = () => {
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
    }

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
                        <PageHeader>{this.state.id ? "Editar" : "Nuevo"} cliente</PageHeader>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Panel>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form>
                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Nombre</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Text"
                                                name="nombre"
                                                value={this.state.nombre}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>apePaterno</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.apePaterno}
                                                name="apePaterno"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>apeMaterno</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.apeMaterno}
                                                name="apeMaterno"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>email</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.email}
                                                name="email"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>telefono</ControlLabel>
                                            <FormControl
                                                type="number"
                                                value={this.state.telefono}
                                                name="telefono"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>
                                        <FormGroup className="constrols text-right">
                                            <Button type="reset"
                                                    onClick={(e) => this.props.history.push('/catalogo/clientes/list')}><i
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
            data: state.cliente.list.find(item => item.id + '' === props.match.params.id + '')
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