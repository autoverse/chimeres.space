<template>
  <div>
  <div class="page-wrap">
    <b-navbar toggleable type="light bg-faded">
      <div class="container">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-link class="navbar-brand" to="#">
          <router-link :to="{ name: 'home'}" class="navbar-brand"><img src="./assets/img/chimeres_space.svg" alt="chimeres"></router-link>
        </b-link>

        <b-collapse is-nav id="nav_collapse">
          <b-nav is-nav-bar>
            <b-nav-item :to="{ name: 'home'}" exact class="m-2">Δράσεις</b-nav-item>
            <b-nav-item :to="{ name: 'space'}" class="m-2">Χώρος</b-nav-item>
            <b-nav-item :to="{ name: 'newsletter'}" class="m-2">Newsletter</b-nav-item>
          </b-nav>

          <b-nav is-nav-bar class="ml-auto social hidden-xs-down">
            <b-nav-item href="https://twitter.com/chimeres/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></b-nav-item>
            <b-nav-item href="https://www.facebook.com/chimeres.space/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></b-nav-item>
            <b-nav-item href="https://www.youtube.com/user/chimeresgr/videos" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></b-nav-item>
            <b-nav-item href="https://www.flickr.com/chimeresgr" target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i></b-nav-item>
          </b-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <div class="content container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>

  <footer>
    <div class="container">
      η διαχείριση του χώρου γίνεται απ' την ομάδα <a href="" target="_blank">χίμαιρες</a>
    </div>
  </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">

  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import '../node_modules/font-awesome/css/font-awesome.min.css';
  @import './app.scss';
</style>
