import client from './'
const url = '/api-catalogo/pedido/'

export const PEDIDO_LIST_REQUEST = "PEDIDO_LIST_REQUEST"
export const PEDIDO_LIST_SUCCESS = 'PEDIDO_LIST_SUCCESS'
export const PEDIDO_LIST_FAILURE = 'PEDIDO_LIST_FAILURE'

export const pedidoList = () => ({
    type: PEDIDO_LIST_REQUEST,
})

export const pedidoListSuccess = (list) => ({
    type: PEDIDO_LIST_SUCCESS,
    list
})

export const pedidoListFailure = error => ({
    type: PEDIDO_LIST_FAILURE,
    error
})

export const PEDIDO_ADD = "PEDIDO_ADD"
export const PEDIDO_FETCH = "PEDIDO_FETCH"
export const PEDIDO_UPDATE = "PEDIDO_UPDATE"
export const PEDIDO_DELETE = "PEDIDO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(pedidoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(pedidoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(pedidoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(pedidoListFailure('Error ' + error.message))
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
                    "type": PEDIDO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/pedido/list')
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
                    "type": PEDIDO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/pedido/list')
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
                    "type": PEDIDO_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/pedido')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}