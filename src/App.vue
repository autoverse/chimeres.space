<template>
  <div id="app">
    <div class="page-wrap">
      <b-navbar toggleable="lg" type="light bg-faded">
        <div class="container">
          <b-nav-toggle target="nav_collapse"></b-nav-toggle>

          <b-link class="navbar-brand" to="#">
            <router-link :to="{ name: 'Home'}" class="navbar-brand"><img src="./assets/img/chimeres_space.svg" alt="chimeres"></router-link>
          </b-link>

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'Home'}" exact class="m-2">Δράσεις</b-nav-item>
              <b-nav-item :to="{ name: 'Calendar'}" class="m-2">Ημερολόγιο</b-nav-item>
              <b-nav-item :to="{ name: 'Archive'}" class="m-2">Αρχείο</b-nav-item>
              <b-nav-item :to="{ name: 'Distro'}" class="m-2">Distro</b-nav-item>
              <b-nav-item :to="{ name: 'Space'}" class="m-2">Χώρος</b-nav-item>
              <b-nav-item :to="{ name: 'Newsletter'}" class="m-2">Newsletter</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-lg-auto flex-row social d-lg-none">
              <b-nav-item href="https://twitter.com/chimeres/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></b-nav-item>
              <b-nav-item href="https://www.facebook.com/chimeres.space/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></b-nav-item>
              <b-nav-item href="https://www.youtube.com/c/chimeres/" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></b-nav-item>
              <b-nav-item href="https://www.mixcloud.com/chimeresgreece/" target="_blank"><i class="fa fa-mixcloud" aria-hidden="true"></i></b-nav-item>
              <b-nav-item href="https://www.flickr.com/chimeresgr" target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <div class="content container">
        <transition name="fade" mode="out-in" :duration="300">
          <router-view/>
        </transition>
      </div>
    </div>

    <footer>
      <div class="container">
        η διαχείριση του χώρου γίνεται απ' την ομάδα <a href="http://chimeres.gr/" target="_blank">χίμαιρες</a>
        <span class="d-none d-lg-inline-block mx-2">&bull;</span>
        <ul class="social social-footer d-none d-lg-inline-block">
          <li><a href="https://twitter.com/chimeres/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="https://www.facebook.com/chimeres.space/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://www.youtube.com/c/chimeres/" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
          <li><a href="https://www.mixcloud.com/chimeresgreece/" target="_blank"><i class="fa fa-mixcloud" aria-hidden="true"></i></a></li>
          <li><a href="https://www.flickr.com/chimeresgr" target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import '../node_modules/fork-awesome/css/fork-awesome.min.css';
@import './assets/scss/app.scss';
</style>
