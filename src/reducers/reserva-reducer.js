import {
    RESERVA_ADD,
    RESERVA_DELETE,
    RESERVA_FETCH,
    RESERVA_LIST_FAILURE,
    RESERVA_LIST_REQUEST,
    RESERVA_LIST_SUCCESS,
    RESERVA_UPDATE
} from '../actions/reserva-action'

const initialState = {
    list: [],
    data: {}
}

const reservaReducer = (state = initialState, action) => {
    switch (action.type) {

        case RESERVA_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case RESERVA_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case RESERVA_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case RESERVA_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case RESERVA_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case RESERVA_FETCH: {
            //console.log('mesaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case RESERVA_DELETE: {
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

export default reservaReducer