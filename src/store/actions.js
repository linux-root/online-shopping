import axios from 'axios'

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS
} from './mutation-types'

export const API_BASE = 'https://scotch-vue-shop-api.herokuapp.com/api/v1'

export const productActions = {
    allProducts ({commit}){
        commit(ALL_PRODUCTS)
        axios.get(`${API_BASE}/products`).then(response => {
            commit(ALL_PRODUCTS_SUCCESS, response.data)
        })
    },
    productById({commit}, id){
        commit(PRODUCT_BY_ID)
        axios.get(`${API_BASE}/products/${id}`).then(response => {
            commit(PRODUCT_BY_ID_SUCCESS, response.data)
        })
    }
}