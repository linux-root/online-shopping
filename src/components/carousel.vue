<template>
    <div>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="2000"
                    img-width="240"
                    img-height="240"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >
            <b-carousel-slide img-src="/static/img/carosuel/slide_img3.png"></b-carousel-slide>
            <b-carousel-slide img-src="/static/img/carosuel/slide_img1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="/static/img/carosuel/slide_img2.jpg"></b-carousel-slide>

        </b-carousel>

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

</style>