import client from './'
const url = '/api-catalogo/mesas/'

export const MESA_LIST_REQUEST = "MESA_LIST_REQUEST"
export const MESA_LIST_SUCCESS = 'MESA_LIST_SUCCESS'
export const MESA_LIST_FAILURE = 'MESA_LIST_FAILURE'

export const mesaList = () => ({
    type: MESA_LIST_REQUEST,
})

export const mesaListSuccess = (list) => ({
    type: MESA_LIST_SUCCESS,
    list
})

export const mesaListFailure = error => ({
    type: MESA_LIST_FAILURE,
    error
})

export const MESA_ADD = "MESA_ADD"
export const MESA_FETCH = "MESA_FETCH"
export const MESA_UPDATE = "MESA_UPDATE"
export const MESA_DELETE = "MESA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(mesaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(mesaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(mesaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(mesaListFailure('Error ' + error.message))
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
                    "type": MESA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/mesa/list')
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
                    "type": PRODUCTO_FETCH,
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
                    "type": MESA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/mesa/list')
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
                    "type": MESA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/productos')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}