import client from './'
const url = '/api-catalogo/menus/'

export const MENU_LIST_REQUEST = "MENU_LIST_REQUEST"
export const MENU_LIST_SUCCESS = 'MENU_LIST_SUCCESS'
export const MENU_LIST_FAILURE = 'MENU_LIST_FAILURE'

export const menuList = () => ({
    type: MENU_LIST_REQUEST,
})

export const menuListSuccess = (list) => ({
    type: MENU_LIST_SUCCESS,
    list
})

export const menuListFailure = error => ({
    type: MENU_LIST_FAILURE,
    error
})

export const MENU_ADD = "MENU_ADD"
export const MENU_FETCH = "MENU_FETCH"
export const MENU_UPDATE = "MENU_UPDATE"
export const MENU_DELETE = "MENU_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(menuListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(menuListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(menuListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(menuListFailure('Error ' + error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": MENU_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/menus/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": MENU_FETCH,
                    "data": r.data
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": MENU_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/menus/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": MENU_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/menus')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}