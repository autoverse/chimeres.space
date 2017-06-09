<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
       <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <router-link :to="{ name: 'home'}" class="navbar-brand"><img src="./assets/img/chimeres_space.svg" alt="chimeres"></router-link>

       <div class="collapse navbar-collapse" id="navbarMain">
         <ul class="navbar-nav mr-auto">
           <!--
           <li class="nav-item">
             <router-link :to="{ name: 'schedule'}" class="nav-link">Πρόγραμμα</router-link>
           </li>
           -->
           <li class="nav-item">
             <router-link :to="{ name: 'space'}" class="nav-link">Χώρος</router-link>
           </li>
           <li class="nav-item">
             <router-link :to="{ name: 'newsletter'}" class="nav-link">Newsletter</router-link>
           </li>
           <!--
           <li class="nav-item">
             <router-link :to="{ name: 'contact'}" class="nav-link">Επικοινωνία</router-link>
           </li>
           -->
         </ul>
         <ul class="nav navbar-nav navbar-right social">
           <li><a href="https://twitter.com/chimeres/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
           <li><a href="https://www.facebook.com/chimeres.space/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
           <li><a href="https://www.youtube.com/user/chimeresgr/videos" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
           <li><a href="https://www.flickr.com/chimeresgr" target="_blank"><i class="fa fa-picture-o" aria-hidden="true"></i></a></li>
         </ul>
       </div>
      </div>
    </nav>

    <div class="content container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import '../node_modules/font-awesome/css/font-awesome.min.css';
  @import './app.scss';
</style>
