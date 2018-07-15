export const productGetters = {
    allProducts: (state, getters) => {
        return state.products;
    },

    productById: (state, getters) => id => {
            //why???
            console.log('product by id getter: ' + state.product)
            return state.product
    }

}