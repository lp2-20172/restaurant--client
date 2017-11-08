import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel} from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import {getById, save, update} from '../../../actions/categoria-action'
import {connect} from 'react-redux'

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nombre: props.data ? props.data.nombre : '',
            apePaterno: props.data ? props.data.apePaterno : '',
            apeMaterno: props.data ? props.data.apeMaterno : '',
            email: props.data ? props.data.email : '',
            telefono: props.data ? props.data.telefono : ''
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
                    nombre: data.nombre,
                    apePaterno: data.apePaterno,
                    apeMaterno: data.apeMaterno,
                    email: data.email,
                    telefono: data.telefono
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
                        <PageHeader>{this.state.id ? "Editar" : "Nuevo"} Cliente</PageHeader>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Panel>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form>
                                        <FormGroup controlId="formBasicText">
                                            <ControlLabel>Nombre</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.nombre}
                                                name="nombre"
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>

                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Apellido Paterno</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Text"
                                                name="apePaterno"
                                                value={this.state.apePaterno}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>

                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Apellido Materno</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Text"
                                                name="apeMaterno"
                                                value={this.state.apeMaterno}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>

                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Email</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="@gmail.com"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                            <FormControlFeedback/>
                                        </FormGroup>

                                        <FormGroup controlId="formBasicText2">
                                            <ControlLabel>Telefono</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder=""
                                                name="telefono"
                                                value={this.state.telefono}
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
            data: state.categoria.list.find(item => item.id + '' === props.match.params.id + '')
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