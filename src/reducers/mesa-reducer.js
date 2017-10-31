import {
    MESA_ADD,
    MESA_DELETE,
    MESA_FETCH,
    MESA_LIST_FAILURE,
    MESA_LIST_REQUEST,
    MESA_LIST_SUCCESS,
    MESA_UPDATE
} from '../actions/mesa-action'

const initialState = {
    list: [],
    data: {}
}

const mesaReducer = (state = initialState, action) => {
    switch (action.type) {

        case MESA_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case MESA_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case MESA_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case MESA_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case MESA_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case MESA_FETCH: {
            //console.log('mesaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case MESA_DELETE: {
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

export default mesaReducer
