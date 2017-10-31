import {combineReducers} from 'redux'
import {authReducer as auth} from '../components/utils/OAuth2'
//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import producto from './producto-reducer'
import cliente from './cliente-reducer'
<<<<<<< HEAD
import mesa from './mesa-reducer'
import reserva from './reserva-reducer'
=======
import pedido from './pedido-reducer'
>>>>>>> 06bd59aecad18b0a50ead5ae80a19e659887d405
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'



var reducers = combineReducers({
    auth: auth,
    // counter: counterReducer,
    categoria: categoria,
    producto: producto,
    cliente: cliente,
<<<<<<< HEAD
    mesa: mesa,
    reserva: reserva,
=======
    pedido: pedido,
>>>>>>> 06bd59aecad18b0a50ead5ae80a19e659887d405
    //  ecomm: ecomm,
    theme: themeReducer,

});

export default reducers;