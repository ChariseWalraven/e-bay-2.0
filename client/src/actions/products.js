import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'
export const FETCHED_PRODUCT = 'FETCHED_PRODUCT'

export const fetchAllProducts = () => (dispatch) => {
  request
    .get(`${baseUrl}/products`)
    .then(res => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: res.body
    }))
}

export const fetchProduct = (productId) => (dispatch) => {
  request
    .get(`${baseUrl}/products/${productId}`)
    .then(res => dispatch({
      type: FETCHED_PRODUCT,
      payload: res.body
    }))
    .catch(err => console.error(err))
}