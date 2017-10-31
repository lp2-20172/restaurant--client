import {
    PEDIDO_ADD,
    PEDIDO_DELETE,
    PEDIDO_FETCH,
    PEDIDO_LIST_FAILURE,
    PEDIDO_LIST_REQUEST,
    PEDIDO_LIST_SUCCESS,
    PEDIDO_UPDATE
} from '../actions/pedido-action'

const initialState = {
    list: [],
    data: {}
}

const pedidoReducer = (state = initialState, action) => {
    switch (action.type) {

        case PEDIDO_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case PEDIDO_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PEDIDO_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case PEDIDO_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case PEDIDO_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case PEDIDO_FETCH: {
            //console.log('pedidoReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case PEDIDO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default:
            return state
    }


}

export default pedidoReducer
