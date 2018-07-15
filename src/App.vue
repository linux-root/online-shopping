<template>
    <div>
        <div id="app" class="wrapper">
            <!-- Page Content  -->
            <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <router-link to="/" class="nav-link">Trang chủ</router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#page-footer">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <router-view></router-view>
                <!-- Your customer chat code -->
                <div class="fb-customerchat"
                     page_id="1406359566327604"
                     logged_in_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn"
                     logged_out_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn">
                </div>
            </div>
        </div>

        <footer id="page-footer" class="content-mini content-mini-full font-s12 bg-primary-dark clearfix">
            <i class="pull-left fa fa-shopping-bag fa-2x text-primary-light"></i><span class="text-amethyst-light">  HỆ THỐNG CỬA HÀNG</span><br>
            <div class="pull-left">
                <a class="font-w600 text-primary-lighter" href="tel:0969587587">Điện thoại liên hệ: Mr.Duy - 0969587587</a>
            </div>
        </footer>

    </div>
</template>

<script>
    import Home from './pages/Home.vue'

    export default {
        name: 'app',
        data() {
            return {
                isActiveSidebar: true
            }
        },
        components: {
            Home
        },

        methods: {
            onClickToggle() {
                this.isActiveSidebar = !this.isActiveSidebar;
            }
        }
    }
</script>

<style>

</style>
