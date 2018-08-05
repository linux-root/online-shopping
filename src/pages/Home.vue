<template>
<div>
    <Carousel></Carousel>
    <product-list></product-list>
</div>
</template>

<script>
    import Carousel from "../components/carousel"
    import productList from '../components/product/ProductList'
export default {
    name: 'Home',
    components: {Carousel, productList}
}
</script>

