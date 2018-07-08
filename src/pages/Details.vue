<template>
    <transition name="custom" enter-active-class="animated zoomIn">
        <div>
            <product-details :product="product" :isAdding="true"></product-details>
        </div>
    </transition>
</template>

<script>
    import ProductDetails from '../components/product/ProductDetails'

    export default {
        created() {
            if (!this.product.name) {
                this.$store.dispatch('productById', this.$route.params['id'])//load data from server if in store doesn't have this product (in case we go to this route directly)
            }
        },
        computed: {
             product(){
                 return this.$store.getters.productById(this.$route.params['id'])
             }
        }
        ,
        components: {
            'product-details': ProductDetails
        }
    }
</script>
