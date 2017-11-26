import {
    VENTA_ADD,
    VENTA_DELETE,
    VENTA_FETCH,
    VENTA_LIST_FAILURE,
    VENTA_LIST_REQUEST,
    VENTA_LIST_SUCCESS,
    VENTA_UPDATE
} from '../actions/venta-action'

const initialState = {
    list: [],
    data: {}
}

const ventaReducer = (state = initialState, action) => {
    switch (action.type) {

        case VENTA_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case VENTA_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case VENTA_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case VENTA_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case VENTA_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case VENTA_FETCH: {
            //console.log('mesaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case VENTA_DELETE: {
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

export default ventaReducer