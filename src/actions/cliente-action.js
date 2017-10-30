import client from './'
const url = '/api-catalogo/clientes/'

export const CLIENTE_LIST_REQUEST = "CLIENTE_LIST_REQUEST"
export const CLIENTE_LIST_SUCCESS = 'CLIENTE_LIST_SUCCESS'
export const CLIENTE_LIST_FAILURE = 'CLIENTE_LIST_FAILURE'

export const clienteList = () => ({
    type: CLIENTE_LIST_REQUEST,
})

export const clienteListSuccess = (list) => ({
    type: CLIENTE_LIST_SUCCESS,
    list
})

export const clienteListFailure = error => ({
    type: CLIENTE_LIST_FAILURE,
    error
})

export const CLIENTE_ADD = "CLIENTE_ADD"
export const CLIENTE_FETCH = "CLIENTE_FETCH"
export const CLIENTE_UPDATE = "CLIENTE_UPDATE"
export const CLIENTE_DELETE = "CLIENTE_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(clienteListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(clienteListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(clienteListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(clienteListFailure('Error ' + error.message))
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
                    "type": CLIENTE_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/clientes/list')
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
                    "type": CLIENTE_FETCH,
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
                    "type": CLIENTE_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/clientes/list')
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
                    "type": CLIENTE_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/clientes')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}