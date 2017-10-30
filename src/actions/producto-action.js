import client from './'
const url = '/api-catalogo/productos/'

export const PRODUCTO_LIST_REQUEST = "PRODUCTO_LIST_REQUEST"
export const PRODUCTO_LIST_SUCCESS = 'PRODUCTO_LIST_SUCCESS'
export const PRODUCTO_LIST_FAILURE = 'PRODUCTO_LIST_FAILURE'

export const productoList = () => ({
    type: PRODUCTO_LIST_REQUEST,
})

export const productoListSuccess = (list) => ({
    type: PRODUCTO_LIST_SUCCESS,
    list
})

export const productoListFailure = error => ({
    type: PRODUCTO_LIST_FAILURE,
    error
})

export const PRODUCTO_ADD = "PRODUCTO_ADD"
export const PRODUCTO_FETCH = "PRODUCTO_FETCH"
export const PRODUCTO_UPDATE = "PRODUCTO_UPDATE"
export const PRODUCTO_DELETE = "PRODUCTO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(productoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(productoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(productoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(productoListFailure('Error ' + error.message))
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
                    "type": PRODUCTO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/productos/list')
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
                    "type": PRODUCTO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/productos/list')
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
                    "type": PRODUCTO_DELETE,
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