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
    ALL_PRODUCTS_SUCCESS
} from './mutation-types'

import * as config from '../config'

const API_BASE = config.API_BASE;

export const productActions = {
    allProducts({commit}) {
        console.debug(API_BASE);
        commit(ALL_PRODUCTS)
        axios.get(`${API_BASE}/products`).then(response => {
            commit(ALL_PRODUCTS_SUCCESS, response.data)
        })
    },
    productById({commit}, id) {
        commit(PRODUCT_BY_ID)
        axios.get(`${API_BASE}/products/${id}`).then(response => {
            commit(PRODUCT_BY_ID_SUCCESS, response.data)
        })
    },
    addProduct ({commit}, payload) {
        commit(ADD_PRODUCT);
       let formData = new FormData();
        formData.append('image', payload.file);
        var product = JSON.stringify(payload);
        formData.append('product', product);
    axios.post(`${API_BASE}/products`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        commit(ADD_PRODUCT_SUCCESS, response.data)
    })}
    ,
    updateProduct ({commit}, payload) {
        commit(UPDATE_PRODUCT)
        // Update product via API
        let formData = new FormData();
        formData.append('image', payload.file);

        var product = JSON.stringify(payload);
        formData.append('product', product);
        axios.put(`${API_BASE}/products/${payload._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            commit(UPDATE_PRODUCT_SUCCESS, response.data)
        })
    },
    removeProduct({commit}, payload) {
        commit(REMOVE_PRODUCT)
        // Delete product via API
        axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_PRODUCT_SUCCESS, response.data)
        })
    }
}