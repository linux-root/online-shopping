<template>
                <div>
                    <div class="products">
                        <div class="container">
                            <div class="row">
                            <template v-for="product in products">
                                <product-item :product="product"></product-item>
                            </template>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
        name: 'product-list',
        created() {
            if (this.products.length === 0) {
                console.log('allProducts action')
                this.$store.dispatch('allProducts') //this call the allProducts Action, NOT getter
                console.log(this.products) //this is computed property, not the data property
            }
        },
        computed : {
            products(){
                return this.$store.getters.allProducts
            }
        },
        components: {
            'product-item': ProductItem
        }
    }
</script>

<style>
    .products {
        background: rgba(134, 134, 134, 0.04);
        padding: 30px 0;
    }
    .container{
        display: flex;
    }
</style>
