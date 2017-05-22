<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
       <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleContainer" aria-controls="navbarsExampleContainer" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <router-link :to="{ name: 'space'}"class="navbar-brand"><img src="./assets/img/chimeres_space.svg" alt="chimeres"></router-link>

       <div class="collapse navbar-collapse" id="navbarsExampleContainer">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item">
             <router-link :to="{ name: 'schedule'}" class="nav-link">Πρόγραμμα</router-link>
           </li>
           <li class="nav-item">
             <router-link :to="{ name: 'space'}" class="nav-link">Χώρος</router-link>
           </li>
           <li class="nav-item">
             <router-link :to="{ name: 'newsletter'}" class="nav-link">Newsletter</router-link>
           </li>
           <li class="nav-item">
             <router-link :to="{ name: 'contact'}" class="nav-link">Επικοινωνία</router-link>
           </li>
         </ul>
         <form class="form-inline my-2 my-md-0">
           <input class="form-control mr-sm-2" type="text" placeholder="αναζήτηση">
           <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
         </form>
       </div>
      </div>
    </nav>

    <div class="content container">
      <router-view></router-view>
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

  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    font-style: normal;
    src: url('./assets/fonts/opensans-light.woff2') format('woff2'),
        url('./assets/fonts/opensans-light.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: bold;
    font-style: normal;
    src: url('./assets/fonts/opensans-semibold.woff2') format('woff2'),
        url('./assets/fonts/opensans-semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    font-style: italic;
    src: url('./assets/fonts/opensans-lightitalic.woff2') format('woff2'),
        url('./assets/fonts/opensans-lightitalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: bold;
    font-style: italic;
    src: url('./assets/fonts/opensans-semibolditalic.woff2') format('woff2'),
        url('./assets/fonts/opensans-semibolditalic.woff') format('woff');
  }

  $gray: #808080;
  $lightgray: #cfcfcf;
  $bggray: #f8f8f8;
  $green: #42b983;

  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: $bggray;
    color: black;
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
  }

  .navbar {
    background-color: white;

    .navbar-brand {

        img {
            width: 300px;
        }
    }

    .navbar-nav {

        .nav-link {
            font-size: 1.1em;
            border-bottom: 2px solid white;

            &:hover {
                color: black;
                border-bottom: 2px solid $green;
            }
        }
    }
  }

  .content {
    padding: 40px 15px;

    a {
        color: $green;
    }

    a.card {
        max-width: 300px;
        text-decoration: none;
        color: black;

        &:hover {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease-out 0s;
            text-decoration: none;
            filter: sepia(60%);
        }

        .card-img {
            background-size: cover;
            height: 150px;
        }
    }
  }
</style>
