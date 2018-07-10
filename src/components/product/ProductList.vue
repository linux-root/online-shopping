<template>
    <div class="col-lg-8">
        <!-- Main Dashboard Chart -->
        <div class="block">
            <div class="block-header">
                <ul class="block-options">
                    <li>
                        <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i class="si si-refresh"></i></button>
                    </li>
                </ul>
                <h3 class="block-title">San Pham</h3>
            </div>
            <div class="block-content block-content-full bg-gray-lighter text-center">
                <div>
                    <div class="products">
                        <div class="container">
                            <template v-for="product in products">
                                <product-item :product="product"></product-item>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Main Dashboard Chart -->
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
    .container{
        display: flex;
    }
</style>
