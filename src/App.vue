<template>
    <div id="page-container">
        <!-- Main Container -->
        <main id="main-container">
            <div class="bg-image" style="background-color: #66c8f2;">
                <!-- Page Header -->
                <div class="content overflow-hidden">
                    <div class="phone pull-right">
                        <div class="text-white-op font-w700">
                            <span> <span class="glyphicon glyphicon-earphone"></span>
                                Vinaphone:</span>
                            <a class="text-white-op font-w700" href="tel:0888665663"> 0888665663</a>
                        </div>
                        <div class="phl">
                        <span class="text-white-op font-w700">
                            <span class="glyphicon glyphicon-earphone"> </span>Viettel:</span><a
                                class="text-white-op font-w700" href="tel:0969587587"> 0969587587</a></div>
                    </div>
                    <div class="push-50-t push-15">
                    <span>
                        <a href="/"><img src="/static/img/logo/logo-duynhat.png"></a>
                    <div class="js-header-search header-search search-container">
                        <form class="form-horizontal" action="/" method="get">
                            <div class="input-group">
                             <span><input class="form-control" type="search" id="base-material-text"
                                          style="background-color:#FFFFFF; width: 500px" name="query"
                                          placeholder="Bạn muốn tìm gì...">
                                <button class="btn btn-minw btn-default"><i class="si si-magnifier"></i></button>
                             </span>
                            </div>
                        </form>
                    </div>
                    </span>
                    </div>
                </div>
                <!-- END Page Header -->
                <nav class="navbar navbar-expand-lg navbar-light bg-gray-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link btn btn-outline-info" href="#" id="navbarDropdown" role="button"
                                   data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class=" text-city"><i class="glyphicon glyphicon-menu-hamburger"> </i> DANH MỤC SẢN PHẨM</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cục phát sóng Wifi di động</a></li>
                                    <li><a class="dropdown-item" href="#">Đồng hồ</a></li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Thiết bị âm thanh</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Loa</a></li>
                                            <li><a class="dropdown-item" href="#">Tai nghe</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
            <!-- Page Content -->
            <div class="content">
                <router-view></router-view>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->

        <div class="fb-customerchat"
             page_id="551298251956658"
             logged_in_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn"
             logged_out_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn">
        </div>

        <!-- Footer -->
        <footer id="page-footer" class="content-mini content-mini-full font-s12 bg-primary-dark clearfix">
            <div class="pull-left">
                <i class="pull-left fa fa-shopping-bag fa-2x text-primary-light"></i><span class="text-amethyst-light">  HỆ THỐNG CỬA HÀNG</span><br><br>
                <span class="font-w600 text-primary-lighter"><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh Hà Nội: 254 Minh Khai - Hai Bà Trưng  - Hà Nội</span><br>
                <span class="font-w600 text-primary-lighter"><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh Hà Nội: 52 Lê Đại Hành - Hai Bà Trưng - Hà Nội</span><br>
                <span class="font-w600 text-primary-lighter"><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh TP Hồ Chí Minh: 53 Nguyễn Thị Minh Khai - Phường Bến Nghé - Quận 1 - TP Hồ Chí Minh</span><br>
                <span class="font-w600 text-primary-lighter"><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh TP Hồ Chí Minh: 71/3 Chu Văn An - Phường 26 - Quận Bình Thạnh - TP Hồ Chí Minh</span><br>
            </div>


            <div style="padding-left: 200px">
                <span class="text-primary-lighter">  Đối tác vận chuyển</span><br>
                <span style="padding-right: 7pt"><img src="../public/static/img/vnpost.png"/></span>
                <span style="padding-right: 7pt"><img src="../public/static/img/viettelpost.png"/></span>
                <span style="padding-right: 7pt"><img src="../public/static/img/giaohangtietkiem.png"/></span>
                <span style="padding-right: 7pt"><img src="../public/static/img/ghn.png"/></span>
            </div>

            <div class="pull-right">
                <h4 class="text-amethyst-light">Kết nối với Shop</h4><br>

                <span>
                    <a style="padding-right: 7pt" href="https://www.facebook.com/duynhatcomvn-551298251956658"><i
                            class="fa fa-4x fa-facebook-square"></i></a>
                    <a style="padding-right: 7pt" href="https://www.facebook.com/duynhatcomvn-551298251956658/"><i
                            class="fa fa-4x fa-youtube-square"></i></a>
                    <a style="padding-right: 7pt" href="/"><i class="fa fa-4x fa-google-plus-square"></i></a>
                    <a style="padding-right: 7pt" href="/"><i class="fa fa-4x fa-twitter-square"></i></a>
                </span>
                <br><br><br>
                <img src="../public/static/img/online-gov.png"/>
            </div>
        </footer>
        <!-- END Footer -->
    </div>
</template>

<script>
    import Home from './pages/Home.vue'

    export default {
        name: 'app',
        components: {
            Home
        }
    }

</script>
<style>
    .search-container {
        display: flex;
        flex-direction: column;
    }

    .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .dropdown > .dropdown-toggle:active {
        /*Without this, clicking will make it sticky*/
        pointer-events: none;
    }

    .navbar-nav li:hover > ul.dropdown-menu {
        display: block;
    }

    .dropdown-submenu {
        position: relative;
    }

    .dropdown-submenu > .dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
    }

    /* rotate caret on hover */
    .dropdown-menu > li > a:hover:after {
        text-decoration: underline;
        transform: rotate(-90deg);
    }

</style>