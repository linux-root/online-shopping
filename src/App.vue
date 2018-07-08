<template>
  <div id="app" class="wrapper">
    <!-- Page Content  -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <button type="button" id="sidebarCollapse" v-on:click="onClickToggle" class="btn btn-info">

            <span><i class="si si-basket"></i>Danh mục sản phẩm</span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link to="/"  class="nav-link">Trang chủ</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fanpage</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Page</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2>lol<i class="fa fa-battery-0 fa-4x"></i></h2>
      <router-view></router-view>
      <!-- Your customer chat code -->
      <div class="fb-customerchat"
           page_id="1406359566327604"
           logged_in_greeting="Hi! How can we help you?"
           logged_out_greeting="Hi! How can we help you?">
      </div>

    </div>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
    data(){
      return {
          isActiveSidebar: true
      }
    },
  components: {
    Home
  },

    methods : {
        onClickToggle() {
            this.isActiveSidebar = !this.isActiveSidebar;
        }
    }
}
</script>

<style>

</style>
