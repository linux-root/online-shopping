<template>
    <div id="page-container" class="sidebar-l sidebar-o side-scroll header-navbar-fixed sidebar-mini">
        <!-- Side Overlay-->

        <!-- Sidebar -->
        <nav id="sidebar">
            <!-- Sidebar Scroll Container -->
            <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 343px;"><div id="sidebar-scroll" style="overflow: hidden; width: auto; height: 343px;">
                <!-- Sidebar Content -->
                <!-- Adding .sidebar-mini-hide to an element will hide it when the sidebar is in mini mode -->
                <div class="sidebar-content">
                    <!-- Side Header -->
                    <div class="side-header side-content bg-white-op">
                        <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
                        <button class="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
                            <i class="fa fa-times"></i>
                        </button>
                        <!-- Themes functionality initialized in App() -> uiHandleTheme() -->
                        <div class="btn-group pull-right">
                            <button class="btn btn-link text-gray dropdown-toggle" data-toggle="dropdown" type="button">
                                <i class="si si-drop"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right font-s13 sidebar-mini-hide">
                                <li class="active">
                                    <a data-toggle="theme" data-theme="default" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-default pull-right"></i> <span class="font-w600">Default</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="theme" data-theme="assets/css/themes/amethyst.min.css" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-amethyst pull-right"></i> <span class="font-w600">Amethyst</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="theme" data-theme="assets/css/themes/city.min.css" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-city pull-right"></i> <span class="font-w600">City</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="theme" data-theme="assets/css/themes/flat.min.css" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-flat pull-right"></i> <span class="font-w600">Flat</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="theme" data-theme="assets/css/themes/modern.min.css" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-modern pull-right"></i> <span class="font-w600">Modern</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="theme" data-theme="assets/css/themes/smooth.min.css" tabindex="-1" href="javascript:void(0)">
                                        <i class="fa fa-circle text-smooth pull-right"></i> <span class="font-w600">Smooth</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a class="h5 text-white" href="index.html">
                            <i class="fa fa-circle-o-notch text-primary"></i> <span class="h4 font-w600 sidebar-mini-hide">ne</span>
                        </a>
                    </div>
                    <!-- END Side Header -->

                    <!-- Side Content -->
                    <div class="side-content">
                        <ul class="nav-main">
                            <li>
                                <a class="active" href="/"><i class="si si-home"></i><span class="sidebar-mini-hide">Trang chủ</span></a>
                            </li>
                            <li class="nav-main-heading"><span class="sidebar-mini-hide">Danh mục</span></li>
                            <li>
                                <a class="nav-submenu" data-toggle="nav-submenu" href="#"><i class="si si-basket"></i><span class="sidebar-mini-hide">Sản phẩm</span></a>
                                <ul>
                                    <li>
                                        <a href="/">Cục phát wifi 4G</a>
                                    </li>
                                    <li>
                                        <a href="/">Đồng hồ</a>
                                    </li>

                                    <li>
                                        <a href="/">SIM 4G</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- END Side Content -->
                </div>
                <!-- Sidebar Content -->
            </div><div class="slimScrollBar" style="background: rgb(255, 255, 255); width: 5px; position: absolute; top: 0px; opacity: 0.35; display: none; border-radius: 7px; z-index: 99; right: 2px; height: 625px;"></div><div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 1; z-index: 90; right: 2px;"></div></div>
            <!-- END Sidebar Scroll Container -->
        </nav>
        <!-- END Sidebar -->

        <!-- Header -->
        <header id="header-navbar" class="content-mini content-mini-full" style="background-color: #C1EAF2;">
            <!-- Header Navigation Left -->
            <ul class="nav-header pull-left">
                <li class="hidden-md hidden-lg">
                    <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
                    <button class="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                        <i class="fa fa-navicon"></i>
                    </button>
                </li>
                <li class="hidden-xs hidden-sm">
                    <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
                    <button class="btn btn-info" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
                        <span>Danh mục sản phẩm</span>
                    </button>
                </li>
            </ul>
            <!-- END Header Navigation Left -->
        </header>
        <!-- END Header -->

        <!-- Main Container -->
        <main id="main-container" style="min-height: 200px;">
            <!-- Page Header -->
            <div class="content bg-image overflow-hidden" style="background-color: #C1EAF2;">
                <div class="push-50-t push-15">
                    <img src="/static/img/logo/logo-crop.png" style="height: 20%; width: 20%; margin-top: 0px;" class="h2 text-white animated zoomIn"/>
                    <div class="js-header-search header-search search-container">
                        <form class="form-horizontal" action="/" method="get">
                            <div class="input-group">
                             <span><input class="form-control" type="search" id="base-material-text" style="background-color:#FFFFFF; width: 500px" name="query" placeholder="Bạn muốn tìm gì...">
                                <button class="btn btn-minw btn-default"><i class="si si-magnifier"></i></button>
                             </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END Page Header -->

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
                <span class="font-w600 text-primary-lighter" ><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh Hà Nội: 254 Minh Khai - Hai Bà Trưng  - Hà Nội</span><br>
                <span class="font-w600 text-primary-lighter" ><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh Hà Nội: 52 Lê Đại Hành - Hai Bà Trưng - Hà Nội</span><br>
                <span class="font-w600 text-primary-lighter" ><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh TP Hồ Chí Minh: 53 Nguyễn Thị Minh Khai - Phường Bến Nghé - Quận 1 - TP Hồ Chí Minh</span><br>
                <span class="font-w600 text-primary-lighter" ><i class="fa fa-home" style="padding-right: 3pt"></i>Chi nhánh TP Hồ Chí Minh: 71/3 Chu Văn An - Phường 26 - Quận Bình Thạnh - TP Hồ Chí Minh</span><br>
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
                    <a style="padding-right: 7pt" href="https://www.facebook.com/duynhatcomvn-551298251956658"><i class="fa fa-4x fa-facebook-square"></i></a>
                    <a style="padding-right: 7pt" href="https://www.facebook.com/duynhatcomvn-551298251956658/"><i class="fa fa-4x fa-youtube-square"></i></a>
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
    .search-container{
        display: flex;
        flex-direction: row;
    }
</style>