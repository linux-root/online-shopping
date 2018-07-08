<template>
    <div>
        <div class="products">
            <div class="container">
                <template v-for="product in products">
                    <product-item :product="product"></product-item>
                </template>
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
                this.$store.dispatch('allProducts') //this call the allProducts Action, NOT getter
            }
        },
        computed: {
            products() {
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
</style>
