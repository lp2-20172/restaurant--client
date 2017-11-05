import client from './'
const url = '/api-catalogo/reservas/'

export const RESERVA_LIST_REQUEST = "RESERVA_LIST_REQUEST"
export const RESERVA_LIST_SUCCESS = 'RESERVA_LIST_SUCCESS'
export const RESERVA_LIST_FAILURE = 'RESERVA_LIST_FAILURE'

export const reservaList = () => ({
    type: RESERVA_LIST_REQUEST,
})

export const reservaListSuccess = (list) => ({
    type: RESERVA_LIST_SUCCESS,
    list
})

export const reservaListFailure = error => ({
    type: RESERVA_LIST_FAILURE,
    error
})

export const RESERVA_ADD = "RESERVA_ADD"
export const RESERVA_FETCH = "RESERVA_FETCH"
export const RESERVA_UPDATE = "RESERVA_UPDATE"
export const RESERVA_DELETE = "RESERVA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(reservaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(reservaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(reservaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(reservaListFailure('Error ' + error.message))
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
                    "type": RESERVA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/reservas/list')
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
                    "type": RESERVA_FETCH,
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
                    "type": RESERVA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/reservas/list')
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
                    "type": RESERVA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/reservas')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}