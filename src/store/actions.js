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
         //   commit(ALL_PRODUCTS_SUCCESS, response.data)
            commit(ALL_PRODUCTS_SUCCESS, mockData)
        })
    },
    productById({commit}, id){
        commit(PRODUCT_BY_ID)
        axios.get(`${API_BASE}/products/${id}`).then(response => {
            const mockItem = mockData[0]
            console.log('mock data: ' + mockItem)
        //    commit(PRODUCT_BY_ID_SUCCESS, response.data)
            commit(PRODUCT_BY_ID_SUCCESS, mockItem)
        })
    }
}

const mockData = [
    {
        _id: 1,
        manId: 3,
        name: 'Samsung S7 Edge',
        price: 659,
        image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
        description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
        manufacturer: {
            id: 3,
            name: 'Samsung'
        }
    },
    {
        _id: 2,
        manId: 1,
        name: 'iPhone 7',
        price: 769,
        image: 'http://www.brandsmartusa.com/images/product/large/20217366.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
        manufacturer: {
            id: 1,
            name: 'Apple'
        }
    },
    {
        _id: 3,
        name: 'Xperia XZ',
        price: 649,
        image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
        manufacturer: {
            id: 2,
            name: 'Sony'
        }
    }
]