import {combineReducers} from 'redux'
import {authReducer as auth} from '../components/utils/OAuth2'
//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import producto from './producto-reducer'
import cliente from './cliente-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
    auth: auth,
    // counter: counterReducer,
    categoria: categoria,
    producto: producto,
    cliente: cliente,
    //  ecomm: ecomm,
    theme: themeReducer,

});

export default reducers;