import {combineReducers} from 'redux'
import {authReducer as auth} from '../components/utils/OAuth2'
//import counterReducer from './counterReducer'
import producto from './producto-reducer'
import cliente from './cliente-reducer'
import mesa from './mesa-reducer'
import reserva from './reserva-reducer'
import pedido from './pedido-reducer'
import menu from './menu-reducer'


//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'



var reducers = combineReducers({
    auth: auth,
    // counter: counterReducer,
    producto: producto,
    cliente: cliente,
    mesa: mesa,
    reserva: reserva,
    pedido: pedido,
    menu: menu,

    //  ecomm: ecomm,
    theme: themeReducer,

});

export default reducers;