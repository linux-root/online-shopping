<template>
    <transition
            name="custom"
            enter-active-class="animated zoomIn"
    >
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
                //    this.$store.dispatch('productById', this.$route.params['id'])
            }
        },
        computed: {
            product() {
                //   return this.$store.getters.productById(this.$route.params['id'])
                return {
                    id: 1,
                    manId: 3,
                    name: 'Samsung S7 Edge',
                    price: 659,
                    image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
                    description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
                    manufacturer: {
                        id: 3,
                        name: 'Samsung'
                    }
                }
            }
        },
        data() {
            //      return {
            // product: this.$store.getters.productById(this.$route.params['id'])
            //      }

            return {
                product: {
                    id: 1,
                    manId: 3,
                    name: 'Samsung S7 Edge',
                    price: 659,
                    image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
                    description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
                    manufacturer: {
                        id: 3,
                        name: 'Samsung'
                    }
                }
            }
        },
        components: {
            'product-details': ProductDetails
        }
    }
</script>
