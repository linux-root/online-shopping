import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS
} from './mutation-types'


export const productMutations = {
    [ALL_PRODUCTS](state){
        state.showLoader = true;
    },

    [ALL_PRODUCTS_SUCCESS](state, payload){
        state.showLoader = false;
        state.products = payload;
    },
    [PRODUCT_BY_ID](state){
        state.showLoader = true;
    },
    [PRODUCT_BY_ID_SUCCESS](state, payload){
        state.showLoader = false;
        state.product= payload;
    }
}