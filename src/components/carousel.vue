<template>
    <div class="row  no-gutter">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="2000"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >
            <b-carousel-slide img-src="../../static/img/products/product-intro1.png"></b-carousel-slide>
            <b-carousel-slide img-src="../../static/img/products/product-intro2.png"></b-carousel-slide>
        </b-carousel>
        <div class="col-sm-4 col-md-4 no-gutter">
            <div class="col-xs-6 col-sm-12">
                <a href="http://boba.vn/may-choi-game-cam-tay"
                   title="Máy chơi game cầm tay giá rẻ chính hãng bảo hành uy tín">
                    <img class="img-responsive"
                         src="https://cdn.boba.vn/resize/w_380-h_130/home-page/1DONE1.png"
                         alt="Máy chơi game cầm tay giá rẻ chính hãng bảo hành uy tín">
                </a>
            </div>
            <div class="col-xs-6 col-sm-12"><a href="http://boba.vn/tay-cam-choi-game"
                                               title="Tay cầm chơi game giá rẻ hỗ trợ mọi hệ điều hành"><img
                    class="img-responsive" src="https://cdn.boba.vn/resize/w_380-h_130/home-page/1DONE2.png"
                    alt="Tay cầm chơi game giá rẻ hỗ trợ mọi hệ điều hành"></a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "carousel",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .banner-container {
        display: flex;
        flex-direction: column;
    }
</style>