import {
    MENU_ADD,
    MENU_DELETE,
    MENU_FETCH,
    MENU_LIST_FAILURE,
    MENU_LIST_REQUEST,
    MENU_LIST_SUCCESS,
    MENU_UPDATE
} from '../actions/menu-action'

const initialState = {
    list: [],
    data: {}
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {

        case MENU_LIST_REQUEST:
            return {
                ...state,
                list: [],
                error: null
            }
        case MENU_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case MENU_LIST_FAILURE:
            return {
                ...state,
                list: [],
                error: action.error,
            }


        case MENU_ADD:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case MENU_UPDATE:
            return {
                ...state,
                //data: {} // no usado aun
            }
        case MENU_FETCH: {
            //console.log('MENUReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case MENU_DELETE: {
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

export default menuReducer
