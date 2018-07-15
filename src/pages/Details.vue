<template>
    <div>
        <router-link to="/">
        <button type="button" class="btn btn-info">
            Quay lại
        </button>
        </router-link>
        <div>
            <product-details :product="product" :isAdding="true"></product-details>
        </div>
    </div>
</template>

<script>
    import ProductDetails from '../components/product/ProductDetails'

    export default {
        created() {
            if (!this.product.name) {
                console.log('run dispatch product by Id in detail')
                this.$store.dispatch('productById', this.$route.params['id'])//load data from server if in store doesn't have this product (in case we go to this route directly)
            }
        },
        computed: {
             product(){
                 console.log(this.$store.getters.productById(this.$route.params['id']))
                 return this.$store.getters.productById(this.$route.params['id'])
             }
        }
        ,
        components: {
            'product-details': ProductDetails
        }
    }
</script>
