import client from './'
const url = '/api-catalogo/ventas/'

export const VENTA_LIST_REQUEST = "VENTA_LIST_REQUEST"
export const VENTA_LIST_SUCCESS = 'VENTA_LIST_SUCCESS'
export const VENTA_LIST_FAILURE = 'VENTA_LIST_FAILURE'

export const ventaList = () => ({
    type: VENTA_LIST_REQUEST,
})

export const ventaListSuccess = (list) => ({
    type: VENTA_LIST_SUCCESS,
    list
})

export const ventaListFailure = error => ({
    type: VENTA_LIST_FAILURE,
    error
})

export const VENTA_ADD = "VENTA_ADD"
export const VENTA_FETCH = "VENTA_FETCH"
export const VENTA_UPDATE = "VENTA_UPDATE"
export const VENTA_DELETE = "VENTA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(ventaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(ventaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(ventaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(ventaListFailure('Error ' + error.message))
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
                    "type": VENTA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/ventas/list')
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
                    "type": VENTA_FETCH,
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
                    "type": VENTA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/ventas/list')
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
                    "type": VENTA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/ventas')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}