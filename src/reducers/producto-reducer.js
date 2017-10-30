import {
    PRODUCTO_ADD,
    PRODUCTO_DELETE,
    PRODUCTO_FETCH,
    PRODUCTO_LIST_FAILURE,
    PRODUCTO_LIST_REQUEST,
    PRODUCTO_LIST_SUCCESS,
    PRODUCTO_UPDATE
} from '../actions/producto-action'

const initialState = {
    list: [],
    data: {}
}

const productoReducer = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCTO_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case PRODUCTO_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PRODUCTO_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case PRODUCTO_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case PRODUCTO_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case PRODUCTO_FETCH: {
            //console.log('productoReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case PRODUCTO_DELETE: {
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

export default productoReducer
